/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from '../../builder/QueryBuilder';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
import { StationeryProductSearchableFields } from './product.constant';
import { TStationeryProduct } from './product.interface';
import { StationeryProductModel } from './product.model';

const createStationeryProductIntoDB = async (
  file: any,
  product: TStationeryProduct,
) => {
  if (file) {
    const imageName = `$${product?.name}`;
    const path = file?.path;

    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    product.productImg = secure_url as string;
  }

  const result = await StationeryProductModel.create(product);
  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  // console.log('Received Query:', query);

  const stationaryProductQuery = new QueryBuilder(
    StationeryProductModel.find(),
    query,
  )
    .search(StationeryProductSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await stationaryProductQuery.modelQuery;
  const meta = await stationaryProductQuery.countTotal();
  return { result, meta };
};

export const ProductServices = {
  createStationeryProductIntoDB,
  getAllProductFromDB,
};
