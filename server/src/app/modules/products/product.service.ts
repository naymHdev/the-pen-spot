import QueryBuilder from '../../builder/QueryBuilder';
import { StationeryProductSearchableFields } from './product.constant';
import { TStationeryProduct } from './product.interface';
import { StationeryProductModel } from './product.model';

const createStationeryProductIntoDB = async (product: TStationeryProduct) => {
  const result = await StationeryProductModel.create(product);
  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
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
