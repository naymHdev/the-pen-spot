import { TUser } from './user.interface';
import { UserModel } from './user.model';

const registeredUserIntoDB = async (payload: TUser) => {
  const result = await UserModel.create(payload);
  return result;
};

const getMe = async (email: string, role: string) => {
  // console.log('C___email', email);

  let result = null;
  if (role === 'user') {
    result = await UserModel.findOne({ email });
  }
  if (role === 'admin') {
    result = await UserModel.findOne({ email });
  }

  return result;
};

// ✅ Update user profile
const updateMeFromDB = async (email: string, payload: Partial<TUser>) => {
  const updateUser = await UserModel.findOneAndUpdate(
    { email: email },
    { $set: payload },
    {
      new: true,
      runValidators: true,
    },
  );

  return updateUser;
};

const findAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

export const UserService = {
  registeredUserIntoDB,
  getMe,
  updateMeFromDB,
  findAllUserFromDB,
};
