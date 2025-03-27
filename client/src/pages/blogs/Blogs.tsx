import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@/components/layouts/Container";
import { useGetAllBlogsQuery } from "@/redux/features/blogs/blogsApi";
import { IBlog } from "@/types/blogs.type";

const BlogsPage = () => {
  const { data: blogsData } = useGetAllBlogsQuery(undefined);
  const blogs: IBlog[] | undefined = blogsData?.data || [];

  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Unique categories from blogs
  const categories = ["All", ...new Set(blogs.map((blog) => blog?.category))];

  // Filtering logic
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog?.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-8 py-10">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 space-y-6">
          {/* Search */}
          <div className="border p-4 rounded-lg shadow">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categories Filter */}
          <div className="border p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="space-y-1 text-gray-600">
              {categories?.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left p-2 rounded-md ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Blog Listing */}
        <main className="w-full md:w-3/4">
          {/* Featured Blog */}
          {filteredBlogs?.length > 0 && (
            <div className="mb-8">
              <img
                src={filteredBlogs[0].coverImage}
                alt={filteredBlogs[0].title}
                className="w-full h-72 object-cover rounded-lg shadow"
              />
              <h2 className="text-2xl font-semibold mt-4">
                {filteredBlogs[0].title}
              </h2>
              <p className="text-gray-600">
                {filteredBlogs[0].content.slice(0, 150)}...
              </p>
              <Link
                to={`/blogs/${filteredBlogs[0].slug}`}
                className="text-primary font-semibold mt-2 inline-block"
              >
                Read More →
              </Link>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBlogs?.slice(1).map((blog) => (
              <div
                key={blog._id}
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{blog.title}</h2>
                  <p className="text-gray-600 text-sm">
                    {blog.content.slice(0, 100)}...
                  </p>
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="text-primary font-semibold mt-2 inline-block"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No results found */}
          {filteredBlogs.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No blogs found matching your criteria.
            </p>
          )}
        </main>
      </div>
    </Container>
  );
};

export default BlogsPage;
