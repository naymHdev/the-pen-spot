import { useGetAllBlogsQuery } from "@/redux/features/blogs/blogsApi";
import Container from "../../components/layouts/Container";
import { IBlog } from "@/types/blogs.type";

const FromOurBlog = () => {
  const { data: blogsData } = useGetAllBlogsQuery(undefined);
  const blogs: IBlog[] | undefined = blogsData?.data;

  return (
    <>
      <div>
        <Container>
          <div className="mt-10 lg:mt-20">
            <h2 className=" text-3xl font-bold leading-relaxed text-center">
              From Our Blog
            </h2>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs?.slice(0, 3).map((blog) => (
                <div
                  key={blog.slug}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <div className="w-full h-48">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </p>
                    <h2 className="text-lg font-semibold text-gray-800 mt-2">
                      {blog.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FromOurBlog;
