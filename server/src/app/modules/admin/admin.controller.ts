import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { catchAsync } from '../../utils/catchAsync';
import { AdminServices } from './admin.service';
import { sendResponse } from '../../utils/sendResponse';

const blockUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  if (req.user?.role !== 'admin') {
    throw new AppError(
      StatusCodes.FORBIDDEN,
      'Access denied! Only admin can block user',
    );
  }

  const result = await AdminServices.blockUserFromDB(userId);

  sendResponse(res, {
    success: true,
    message: 'User blocked successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

const updateOrder = catchAsync(async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  if (!status) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Order status is required.');
  }

  const updatedOrder = await AdminServices.updateOrderStatus(orderId, status);

  sendResponse(res, {
    success: true,
    message: 'Order status updated successfully.',
    statusCode: StatusCodes.OK,
    data: updatedOrder,
  });
});

export const AdminControllers = {
  blockUser,
  updateOrder,
};
