import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { UserModel } from '../users/user.model';
import { createToken, verifyToken } from './auth.utils';
import config from '../../config';
import { TLoginUser } from './auth.interface';

const loginUserFromDB = async (payload: TLoginUser) => {
  const user = await UserModel.isUserExistsByCustomEmail(payload.email);
  // console.log('user login', user);

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
    email: user.email,
    role: user.role,
  };

  // console.log('jwtPayload', jwtPayload);

  const token = createToken(
    jwtPayload,
    config.jwt_access_secret_token as string,
    config.jwt_access_expire_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret_token as string,
    config.jwt_refresh_expire_in as string,
  );

  return {
    token,
    refreshToken,
  };

  // ------ END Login ------
};

const refreshToken = async (token: string) => {
  // checking if the given token is valid
  const decoded = verifyToken(token, config.jwt_refresh_secret_token as string);

  const { email } = decoded;

  // checking if the user is exist
  const user = await UserModel.isUserExistsByCustomEmail(email);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found !');
  }
  // checking if the user is already deleted
  const isDeleted = user?.isDeleted;

  if (isDeleted) {
    throw new AppError(StatusCodes.FORBIDDEN, 'This user is deleted !');
  }

  // checking if the user is blocked
  const userStatus = user?.status;

  if (userStatus === 'blocked') {
    throw new AppError(StatusCodes.FORBIDDEN, 'This user is blocked ! !');
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret_token as string,
    config.jwt_access_expire_in as string,
  );

  return {
    accessToken,
  };
};

export const AuthServices = {
  loginUserFromDB,
  refreshToken,
};
