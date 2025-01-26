import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  status: 'active' | 'blocked';
  isDeleted: boolean;
};

export interface UserPassHas extends Model<TUser> {
  isUserExistsByCustomEmail(email: string): Promise<TUser>;
  isUserPasswordMatch(plainTextPass: string, hasPass: string): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
