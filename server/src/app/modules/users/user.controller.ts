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

  // console.log(req.user);

  const { email, role } = req.user;
  const result = await UserService.getMe(email, role);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User is retrieved successfully',
    data: result,
  });
});

const updateProfile = catchAsync(async (req, res) => {
  const { email } = req.user;
  const updateUser = await UserService.updateMeFromDB(email, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Profile updated successfully',
    data: updateUser,
  });
});

const findAllUser = catchAsync(async (req, res) => {

  console.log('User----C', req.user);

  const result = await UserService.findAllUserFromDB();

  sendResponse(res, {
    success: true,
    message: 'User found successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const UserController = {
  userRegistration,
  getMe,
  updateProfile,
  findAllUser,
};
