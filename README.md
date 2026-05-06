# Redswyft

Marketing site + blog for Redswyft, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and shadcn/ui-style components. Blog posts are MDX files in `content/blog/`.

## Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project layout

```
app/                  Pages (App Router)
  layout.tsx          Root layout, header + footer
  page.tsx            Home
  about/page.tsx
  pricing/page.tsx
  contact/page.tsx
  blog/page.tsx       Blog index
  blog/[slug]/page.tsx Blog post
components/
  ui/                 shadcn-style primitives (button, card)
  site-header.tsx
  site-footer.tsx
  hero.tsx
  features.tsx
content/
  blog/               MDX posts (frontmatter: title, date, summary)
lib/
  utils.ts            cn() helper
  blog.ts             MDX loader
```

## Adding a blog post

Create `content/blog/<slug>.mdx` with frontmatter:

```mdx
---
title: "My post title"
date: "2026-05-05"
summary: "One-line description shown on the index."
---

Your post body in MDX.
```

The post is automatically picked up at `/blog/<slug>`.

## Deploying

See [DEPLOY.md](./DEPLOY.md) for the full GitHub → Vercel → Namecheap (redswyft.com) walkthrough.
