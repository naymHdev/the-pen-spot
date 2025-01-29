import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { AuthServices } from './auth.service';
import config from '../../config';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUserFromDB(req.body);

  const { token, refreshToken } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'You are logged in successfully',
    data: {
      token,
    },
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AuthServices.refreshToken(refreshToken);

  // console.log('refreshToken_controller', result);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Access token is retrieved successfully!',
    data: result,
  });
});

const findAllUser = catchAsync(async (req, res) => {
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
  refreshToken,
};
