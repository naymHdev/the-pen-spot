import express from 'express';
import { ProductController } from './product.controller';
import { ProductValidations } from './product.validation';
import { validateRequest } from '../../middlewares/validateRequest';
const router = express.Router();

router.post(
  '/create-stationary-product',
  validateRequest(ProductValidations.stationeryValidationsProductSchema),
  ProductController.createStationaryProduct,
);

export const ProductRoutes = router;
