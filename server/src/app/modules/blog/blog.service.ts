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

const getAllBlogs = async () => {
  const result = await Blog.find();
  return result;
};

export const BlogsServices = {
  createBlog,
  getAllBlogs,
};
