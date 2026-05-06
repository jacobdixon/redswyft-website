import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes from the team at Redswyft.",
};

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Field notes on what we're building, what worked, and what didn't.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-muted-foreground">
            No posts yet. Add an MDX file to{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-sm">
              content/blog/
            </code>{" "}
            to get started.
          </p>
        ) : (
          <ul className="mt-12 divide-y">
            {posts.map((post) => (
              <li key={post.slug} className="py-6">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight group-hover:text-primary">
                    {post.title}
                  </h2>
                  {post.summary && (
                    <p className="mt-2 text-muted-foreground">{post.summary}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
