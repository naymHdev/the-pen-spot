import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { UserModel } from '../users/user.model';
import { createToken } from './auth.utils';
import config from '../../config';
import { TLoginUser } from './auth.interface';

const loginUserFromDB = async (payload: TLoginUser) => {
  const user = await UserModel.isUserExistsByCustomEmail(payload.email);

  // Check user exist or no!
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }

  // Check user is blocked!
  if (user.status == 'blocked') {
    throw new AppError(StatusCodes.BAD_REQUEST, 'User is blocked');
  }

  // Check password match
  if (!(await UserModel.isUserPasswordMatch(payload.password, user.password))) {
    throw new AppError(StatusCodes.FORBIDDEN, 'Invalid password');
  }

  // Create token use jwt and sent to the client
  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
  };

  // console.log('jwtPayload', jwtPayload);

  const token = createToken(
    jwtPayload,
    config.jwt_access_secret_token as string,
    config.jwt_access_expire_in as string,
  );

  return {
    token,
  };

  // ------ END Login ------
};
const findAllUserFromDB = async () => {
  const result = await UserModel.find();
  // console.log('result', result);
  return result;
};

export const AuthServices = {
  loginUserFromDB,
  findAllUserFromDB
};
