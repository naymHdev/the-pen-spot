import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { UserService } from './user.service';

const userRegistration = catchAsync(async (req, res) => {
  const result = await UserService.registeredUserIntoDB(req.body);
  sendResponse(res, {
    success: true,
    message: 'User created successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

export const UserController = { userRegistration };
