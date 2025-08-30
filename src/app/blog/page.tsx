export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Blog</h1>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Blog Card */}
          <div className="rounded-2xl border bg-white shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Blog Post Title
            </h2>
            <p className="text-gray-600 mb-4">
              A short description of the blog post goes here to give a preview.
            </p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Read More
            </button>
          </div>

          {/* Duplicate for more posts */}
          <div className="rounded-2xl border bg-white shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Another Post
            </h2>
            <p className="text-gray-600 mb-4">
              Here’s another description, keeping things consistent.
            </p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Read More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
