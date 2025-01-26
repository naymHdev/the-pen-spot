import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { AuthServices } from './auth.service';
// import AppError from '../../errors/AppError';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUserFromDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User login success',
    data: result,
  });
});

const findAllUser = catchAsync(async (req, res) => {
  // console.log(req.user);

  // if (req.user?.role !== 'admin') {
  //   throw new AppError(StatusCodes.BAD_REQUEST, 'User not fetching all users');
  // }

  const result = await AuthServices.findAllUserFromDB();

  sendResponse(res, {
    success: true,
    message: 'User found successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
  findAllUser,
};
