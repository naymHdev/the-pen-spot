import { StatusCodes } from 'http-status-codes';
import { OrderService } from './order.service';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';

const createOrder = catchAsync(async (req, res) => {
  const user = req.user;

  // console.log('order-controller', req.body, 'user', user);

  const order = await OrderService.createOrder(user, req.body, req.ip!);

  sendResponse(res, {
    success: true,
    message: 'Order placed successfully',
    statusCode: StatusCodes.CREATED,
    data: order,
  });
});

const getAllOrder = catchAsync(async (req, res) => {
  const order = await OrderService.getOrders();

  sendResponse(res, {
    success: true,
    message: 'Order retrieve successfully!',
    statusCode: StatusCodes.OK,
    data: order,
  });
});

export const OrderController = {
  createOrder,
  getAllOrder,
};
