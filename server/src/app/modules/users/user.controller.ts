import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { UserService } from './user.service';

const userRegistration = catchAsync(async (req, res) => {
  const result = await UserService.registeredUserIntoDB(req.body);
  sendResponse(res, {
    success: true,
    message: 'Congratulation, Welcome to our family!',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

const getMe = catchAsync(async (req, res) => {

  const { userEmail, role } = req.user;
  const result = await UserService.getMe(userEmail, role);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User is retrieved successfully',
    data: result,
  });
});

export const UserController = { userRegistration, getMe };
