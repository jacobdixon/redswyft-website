import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

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

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← All posts
        </Link>
        <header className="mt-6">
          <p className="text-sm text-muted-foreground">
            {formatDate(post.date)}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            {post.title}
          </h1>
          {post.summary && (
            <p className="mt-4 text-lg text-muted-foreground">{post.summary}</p>
          )}
        </header>
        <div className="prose prose-slate mt-10 max-w-none dark:prose-invert">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
