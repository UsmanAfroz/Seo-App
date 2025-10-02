// lib/post.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content", "posts");

export function getAllPosts() {
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(postsDir, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(raw);

      return {
        slug: file.replace(/\.mdx?$/, ""), // 👈 slug from filename
        title: data.title || "Untitled Post",
        description: data.description || "",
        coverImage: data.coverImage || null,
        date: data.date || null,
        author: data.author || "Anonymous",
      };
    });
}
