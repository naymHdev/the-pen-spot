import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { UserModel } from '../users/user.model';

const blockUserFromDB = async (userId: string) => {
  const user = await UserModel.findById(userId);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }

  if (user && user.role === 'admin') {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Admin Do not Blocking admin!');
  }

  if (user.status === 'blocked') {
    throw new AppError(StatusCodes.BAD_REQUEST, 'User is already blocked');
  }

  user.status = 'blocked';
  await user.save();
};

export const AdminServices = {
  blockUserFromDB,
};
