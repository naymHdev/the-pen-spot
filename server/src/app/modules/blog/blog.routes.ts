import { Router, Request, Response, NextFunction } from 'express';
import { BlogControllers } from './blog.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { BlogValidations } from './blog.validation';
import { auth } from '../../middlewares/auth';
import { upload } from '../../utils/sendImageToCloudinary';

const router = Router();

router.post(
  '/',
  auth('admin'),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(BlogValidations.blogSchema),
  BlogControllers.cretaBlog,
);

router.get('/', BlogControllers.getAllBlogs);

export const BlogRoutes = router;
