import { getAllPosts } from "@/lib/post"; 
import Link from "next/link";
// import Image from "next/image";

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-[10rem] px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Blogs</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
          Insights, stories, and updates from our team.
        </p>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="rounded-2xl border bg-white shadow-md p-6 hover:shadow-lg transition"
              >
                {post.coverImage && (
                  <div className="mb-4">
                    {/* <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                    /> */}
                  </div>
                )}

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.description}</p>

                <Link href={`/blog/${post.slug}`}>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
