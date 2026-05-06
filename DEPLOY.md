# Deploying redswyft.com

End-to-end runbook: local check → GitHub → Vercel → Namecheap DNS. Plan on
30–45 minutes the first time, most of which is waiting for DNS to propagate.

Prereqs on your machine: Node 18.18+, git, and a GitHub account. A
[Vercel](https://vercel.com) account (free Hobby plan is fine) and your
[Namecheap](https://www.namecheap.com) login.

---

## 1. Run it locally first

From the project folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000. You should see the home page, with working links to
About, Pricing, Blog, and Contact. The blog index should list two starter
posts. If anything is broken, fix it now — Vercel will reproduce the same
error.

When you're happy, also run a production build to make sure it compiles
cleanly:

```bash
npm run build
```

---

## 2. Push to GitHub

You can use either the GitHub CLI (fastest) or the web UI.

### Option A — GitHub CLI

```bash
# from inside the project folder
git init
git add .
git commit -m "Initial scaffold"

# requires `gh auth login` once
gh repo create redswyft-website --public --source=. --remote=origin --push
```

### Option B — web UI

1. Create a new repo at https://github.com/new (name it `redswyft-website`,
   leave it empty — no README, no .gitignore, no license).
2. Then in the project folder:

   ```bash
   git init
   git add .
   git commit -m "Initial scaffold"
   git branch -M main
   git remote add origin https://github.com/<your-username>/redswyft-website.git
   git push -u origin main
   ```

---

## 3. Import to Vercel

1. Go to https://vercel.com/new.
2. Click **Import** next to the `redswyft-website` repo. (If you don't see it,
   click **Adjust GitHub App Permissions** and grant access to the repo.)
3. Framework preset: **Next.js** (auto-detected). Leave all build settings at
   their defaults — `npm run build`, output `.next`.
4. Click **Deploy**.

In about a minute you'll get a preview URL like
`redswyft-website-abc123.vercel.app`. Open it and sanity-check the pages.

> Every push to `main` will auto-deploy to production from now on. PRs get
> their own preview URL.

---

## 4. Add `redswyft.com` as a custom domain in Vercel

1. In your Vercel project: **Settings → Domains**.
2. Add **`redswyft.com`** → click **Add**.
3. Vercel will ask if you want to also redirect `www.redswyft.com` → yes, add
   it. (Or pick the other direction. Either is fine; the rest of this guide
   assumes apex is canonical and `www` redirects to it.)
4. Vercel will now show DNS records you need to set. Keep this tab open — the
   exact values are below.

---

## 5. Configure Namecheap DNS

Log into Namecheap → **Domain List** → click **Manage** next to `redswyft.com`
→ go to the **Advanced DNS** tab.

**Delete any existing records that conflict** (Namecheap pre-populates a
parking page CNAME and URL redirect — remove both). Don't touch the
auto-generated NS records.

Add these two records:

| Type    | Host  | Value                  | TTL       |
|---------|-------|------------------------|-----------|
| A       | `@`   | `76.76.21.21`          | Automatic |
| CNAME   | `www` | `cname.vercel-dns.com.`| Automatic |

Notes:

- The `@` host means "the apex" (`redswyft.com` itself).
- `76.76.21.21` is Vercel's anycast IP for apex records. Use this exact value
  unless Vercel's domain setup screen shows a different one (rare).
- The trailing dot on `cname.vercel-dns.com.` is optional — Namecheap accepts
  it either way.
- Leave Namecheap's nameservers as the default `dns1.registrar-servers.com` /
  `dns2.registrar-servers.com`. **Do not switch to Vercel nameservers** unless
  you're sure — using Namecheap's DNS is simpler.

Click the green checkmark to save each record.

---

## 6. Wait for verification

Back on Vercel's **Domains** screen, both `redswyft.com` and
`www.redswyft.com` will start as "Invalid Configuration" or "Pending." Within
5–30 minutes (sometimes faster) they'll flip to **Valid**. Vercel will
auto-issue a Let's Encrypt certificate at the same time.

You can watch propagation here: https://www.whatsmydns.net/#A/redswyft.com

When Vercel shows green for both domains, open https://redswyft.com — you
should see the site over HTTPS.

---

## 7. Common gotchas

- **CAA records.** If `redswyft.com` has a `CAA` record that doesn't list
  `letsencrypt.org`, Vercel can't issue a cert. Namecheap doesn't add CAA
  records by default, so this is unlikely — but if you've added one, include
  `letsencrypt.org`.
- **Old A record stuck cached.** If Namecheap had a parking IP and you're
  hitting it via your ISP's cache, try `dig redswyft.com @1.1.1.1` to see the
  authoritative answer.
- **`www` is the canonical one.** If you'd rather have `www.redswyft.com` be
  primary, swap the records: A record on `www` (host = `www`, value = same IP
  doesn't work — instead use CNAME on `www` pointing to
  `cname.vercel-dns.com.`, and keep an A on `@` pointing to `76.76.21.21`,
  then in Vercel set `www` as primary). Vercel will handle the redirect either
  way.
- **Build failed on Vercel but works locally.** Check that you committed
  `package-lock.json`. Vercel uses it to lock dependency versions.

---

## 8. Iterating with Claude Code

Once the repo is live, the loop for adding pages or posts looks like this:

```bash
cd redswyft-website
claude
```

Then prompt:

> Add a Careers page at `/careers` modeled on the About page, with three open
> roles: Founding Engineer, Design Engineer, and Customer Engineer. Update the
> footer nav to include it.

Claude Code will edit, you'll review the diff, commit, push — and Vercel will
auto-deploy the change to production within a minute. For blog posts:

> Write a new MDX post at `content/blog/<slug>.mdx` titled "<title>" with a
> summary about <topic>.

That's it. The rest is just writing.
