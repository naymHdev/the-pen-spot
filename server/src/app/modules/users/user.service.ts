import { TUser } from './user.interface';
import { UserModel } from './user.model';

const registeredUserIntoDB = async (payload: TUser) => {
  const result = await UserModel.create(payload);
  return result;
};
export const UserService = {
  registeredUserIntoDB,
};
