import { useParams } from "react-router-dom";
import Container from "@/components/layouts/Container";
import { useGetAllBlogsQuery } from "@/redux/features/blogs/blogsApi";
import { IBlog } from "@/types/blogs.type";
import { Badge } from "@/components/ui/badge";
import moment from "moment";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const { data: blogsData } = useGetAllBlogsQuery(undefined);
  const blogs: IBlog[] | undefined = blogsData?.data;
  const singleBlog = blogs?.find((blog) => blog._id === id);

  if (!singleBlog) {
    return <Container>Blog not found</Container>;
  }

  return (
    <Container>
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {singleBlog?.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-6">
          <span>{moment(singleBlog?.createdAt).format("LL")}</span>
        </div>
        <img
          src={singleBlog?.coverImage}
          alt={singleBlog?.title}
          className="w-full rounded-lg shadow-md mb-6"
        />
        <div className="flex flex-wrap gap-2 mb-6">
          {singleBlog?.categories.map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </div>
        <p className="text-gray-800 leading-relaxed mb-6">
          {singleBlog?.content}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {singleBlog?.tags.map((tag) => (
            <Badge variant="outline" key={tag}>
              #{tag}
            </Badge>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BlogDetailsPage;
