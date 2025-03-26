import QueryBuilder from '../../builder/QueryBuilder';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
import { IBlog } from './blog.interface';
import Blog from './blog.model';

const createBlog = async (blog: IBlog, file: any) => {
  if (file) {
    const imageName = `$${blog?.title}`;
    const path = file?.path;

    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    blog.coverImage = secure_url as string;
  }

  const result = await Blog.create(blog);
  return result;
};

const getAllBlogs = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await blogQuery.modelQuery;
  const meta = await blogQuery.countTotal();
  return { result, meta };
};

export const BlogsServices = {
  createBlog,
  getAllBlogs,
};
