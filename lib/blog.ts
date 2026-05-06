import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export interface Post extends PostMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

async function readPostFile(filename: string): Promise<Post> {
  const slug = filename.replace(/\.mdx?$/, "");
  const fullPath = path.join(BLOG_DIR, filename);
  const raw = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    content,
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  let entries: string[];
  try {
    entries = await fs.readdir(BLOG_DIR);
  } catch {
    return [];
  }
  const files = entries.filter((f) => /\.mdx?$/.test(f));
  const posts = await Promise.all(files.map(readPostFile));
  return posts
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  for (const filename of candidates) {
    try {
      return await readPostFile(filename);
    } catch {
      continue;
    }
  }
  return null;
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}
