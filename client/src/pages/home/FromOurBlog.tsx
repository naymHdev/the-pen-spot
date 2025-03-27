import { useGetAllBlogsQuery } from "@/redux/features/blogs/blogsApi";
import Container from "../../components/layouts/Container";
import { IBlog } from "@/types/blogs.type";
import moment from "moment";
import TPButton from "@/components/buttons/TPButton";
import { Link } from "react-router-dom";

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

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              {blogs?.slice(0, 3).map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white overflow-hidden flex flex-col h-full"
                >
                  {/* Image Section */}
                  <div className="w-full h-[250px]">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-4 text-center flex flex-col flex-grow">
                    <p className="text-sm uppercase text-gray-500">
                      Post Date : {moment(blog.createdAt).format("LL")}
                    </p>
                    <h2 className="text-lg font-semibold text-gray-800 mt-2">
                      {blog.title}
                    </h2>

                    {/* Spacer to push button to the bottom */}
                    <div className="flex-grow"></div>

                    {/* Button Section (Always at the Bottom) */}
                    <div className="flex justify-center pb-4">
                      <Link to={`/blog-deatils/${blog._id}`}>
                        <TPButton
                          text="Read More"
                          className="hover:text-secondary"
                        />
                      </Link>
                    </div>
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
