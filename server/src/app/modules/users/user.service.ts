import { TUser } from './user.interface';
import { UserModel } from './user.model';

const registeredUserIntoDB = async (payload: TUser) => {
  const result = await UserModel.create(payload);
  return result;
};

const getMe = async (userEmail: string, role: string) => {
  let result = null;
  if (role === 'user') {
    result = await UserModel.findOne({ email: userEmail });
  }
  if (role === 'admin') {
    result = await UserModel.findOne({ email: userEmail });
  }

  return result;
};

export const UserService = {
  registeredUserIntoDB,
  getMe,
};
