import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { BlogsServices } from './blog.service';

const cretaBlog = catchAsync(async (req, res) => {
  const result = await BlogsServices.createBlog(req.body, req.file);

  sendResponse(res, {
    success: true,
    message: 'Blog  created successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogsServices.getAllBlogs(req.query);

  sendResponse(res, {
    success: true,
    message: 'Blog  retrived successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const BlogControllers = {
  cretaBlog,
  getAllBlogs,
};
