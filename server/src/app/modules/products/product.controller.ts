import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const createStationaryProduct = catchAsync(async (req, res) => {
  // console.log("image", req.file);

  const result = await ProductServices.createStationeryProductIntoDB(
    req.file,
    req.body,
  );
  sendResponse(res, {
    success: true,
    message: 'Product created successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

const getALlStationaryProduct = catchAsync(async (req, res) => {
  // console.log('query', req.query);

  const result = await ProductServices.getAllProductFromDB(req.query);
  sendResponse(res, {
    success: true,
    message: 'Product found successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const ProductController = {
  createStationaryProduct,
  getALlStationaryProduct,
};
