import { TStationeryProduct } from './product.interface';
import { StationeryProductModel } from './product.model';

// create a product
const createStationeryProductIntoDB = async (product: TStationeryProduct) => {
  const result = await StationeryProductModel.create(product);
  return result;
};

export const ProductServices = {
  createStationeryProductIntoDB,
};
