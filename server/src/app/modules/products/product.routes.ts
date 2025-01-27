import express from 'express';
import { ProductController } from './product.controller';
import { ProductValidations } from './product.validation';
import { validateRequest } from '../../middlewares/validateRequest';
import { auth } from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/create-stationary-product',
  auth('admin'),
  validateRequest(ProductValidations.stationeryValidationsProductSchema),
  ProductController.createStationaryProduct,
);

router.get(
  '/get-all-stationary-products',
  auth('admin'),
  ProductController.getALlStationaryProduct,
);
export const ProductRoutes = router;
