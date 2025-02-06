import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../utils/catchAsync';
import { StatusCodes } from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/users/user.interface';
import AppError from '../errors/AppError';
import { UserModel } from '../modules/users/user.model';

export const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // console.log('token', token);

    if (!token) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        'You are not a verified author',
      );
    }

    // verify invalid jwt token
    let decoded;
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret_token as string,
      ) as JwtPayload;
    } catch {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'Invalid or expired token');
    }
    const { email, role } = decoded;
    // console.log('decoded', decoded);

    // checking if the user is exist
    // const isUser = await UserModel.findOne({ email: email });

    // if (!isUser) {
    //   throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found !');
    // }

    // --------------------

    const user = await UserModel.isUserExistsByCustomEmail(email);

    // console.log('existingUser', decoded, { user });

    // Check user exist or no!
    if (!user) {
      throw new AppError(
        StatusCodes.NOT_FOUND,
        'User not found. Please check the ID and try again.',
      );
    }

    // check user is deleted or not!
    if (user.isDeleted) {
      throw new AppError(
        StatusCodes.FORBIDDEN,
        'This account has been deleted and is no longer accessible.',
      );
    }

    // check user is blocked or not!
    if (user.status === 'blocked') {
      throw new AppError(
        StatusCodes.FORBIDDEN,
        'Your account has been blocked. Please contact support for assistance.',
      );
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(StatusCodes.UNAUTHORIZED, `You are a UNAUTHORIZED`);
    }
    // decoded undefined
    // req.user = decoded as JwtPayload & { role: string };
    // req.user = {
    //   _id: user._id,
    //   email: user.email,
    //   role: user.role,
    // };
    req.user = user;
    next();
  });
};
