import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { UserModel } from '../users/user.model';
import Order from '../order/order.model';
import { OrderStatus } from '../order/order.interface';

const blockUserFromDB = async (userId: string) => {
  const user = await UserModel.findById(userId);

  if (!user) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      'User not found. Please check the ID and try again.',
    );
  }

  if (user && user.role === 'admin') {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Admin Do not Blocking admin!');
  }

  if (user.status === 'blocked') {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'Your account has been blocked. Please contact support for assistance.',
    );
  }

  user.status = 'blocked';
  await user.save();
};

const updateOrderStatus = async (orderId: string, newStatus: OrderStatus) => {
  const validStatuses = [
    'Pending',
    'Paid',
    'Shipped',
    'Completed',
    'Cancelled',
  ];

  if (!validStatuses.includes(newStatus)) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'Invalid order status provided.',
    );
  }

  const order = await Order.findById(orderId);

  if (!order) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Order not found.');
  }

  if (order.status === 'Completed' || order.status === 'Cancelled') {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'This order has already been finalized and cannot be updated.',
    );
  }

  order.status = newStatus;
  await order.save();

  return order;
};

export const AdminServices = {
  blockUserFromDB,
  updateOrderStatus,
};
