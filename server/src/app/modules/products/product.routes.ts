import express, { NextFunction, Request, Response } from 'express';
import { ProductController } from './product.controller';
import { ProductValidations } from './product.validation';
import { validateRequest } from '../../middlewares/validateRequest';
import { auth } from '../../middlewares/auth';
import { upload } from '../../utils/sendImageToCloudinary';
const router = express.Router();

router.post(
  '/create-stationary-product',
  auth('admin'),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(ProductValidations.stationeryValidationsProductSchema),
  ProductController.createStationaryProduct,
);

router.get(
  '/get-all-stationary-products',
  auth('admin'),
  ProductController.getALlStationaryProduct,
);
export const ProductRoutes = router;
