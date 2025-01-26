import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TRole = 'admin' | 'user';
export type TUserStatus = 'active' | 'blocked';

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: TRole;
  status: TUserStatus;
  isDeleted: boolean;
};

export interface UserPassHas extends Model<TUser> {
  isUserExistsByCustomEmail(email: string): Promise<TUser>;
  isUserPasswordMatch(plainTextPass: string, hasPass: string): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
