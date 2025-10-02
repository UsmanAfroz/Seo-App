import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content", "posts");
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((filename) => ({
      slug: filename.replace(/\.mdx?$/, "").replace(/\.md$/, ""),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const filePath = path.join(
    process.cwd(),
    "content",
    "posts",
    `${params.slug}.md`
  );
  if (!fs.existsSync(filePath)) return { title: "Post | Buildlinkly" };

  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);

  return {
    title: `${data.title} | Buildlinkly`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.ogImage || data.coverImage].filter(Boolean) as string[],
    },
  };
}

export const revalidate = 60; // optional ISR; page can be regenerated every 60s

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postsDir = path.join(process.cwd(), "content", "posts");
  const filePath = path.join(postsDir, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="max-w-4xl mx-auto py-16 px-6">
        <p>Post not found</p>
        <Link href="/blog">Back to blog</Link>
      </main>
    );
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        frontmatter.canonical ||
        `https://buildlinkly.pro/blog/${frontmatter.slug}`,
    },
    headline: frontmatter.title,
    image: [frontmatter.ogImage || frontmatter.coverImage].filter(Boolean),
    datePublished: frontmatter.date,
    dateModified: frontmatter.updated || frontmatter.date,
    author: { "@type": "Person", name: frontmatter.author || "Buildlinkly" },
    publisher: {
      "@type": "Organization",
      name: "Buildlinkly",
      logo: {
        "@type": "ImageObject",
        url: "https://buildlinkly.pro/logo.png",
      },
    },
    description: frontmatter.description,
  };

  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <article className="prose prose-lg md:prose-xl prose-indigo dark:prose-invert max-w-none">
        {/* Title */}
        <h1 className="!mb-4">{frontmatter.title}</h1>

        {/* Meta Info */}
        <div className="text-sm text-gray-500 mb-6">
          {frontmatter.date} • {frontmatter.author}
        </div>

        {/* Cover Image */}
        {frontmatter.coverImage && (
          <div className="mb-8">
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              width={1200}
              height={630}
              className="rounded-lg object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </article>
    </main>
  );
}
