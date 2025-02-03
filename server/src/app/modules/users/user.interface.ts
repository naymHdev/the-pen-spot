import { Model, Document } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TRole = 'admin' | 'user';
export type TUserStatus = 'active' | 'blocked';

export interface TUser extends Document {
  name: string;
  email: string;
  password: string;
  role: TRole;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  postalCode?: string;
  status: TUserStatus;
  isDeleted: boolean;
}

export interface UserPassHas extends Model<TUser> {
  isUserExistsByCustomEmail(email: string): Promise<TUser>;
  isUserPasswordMatch(plainTextPass: string, hasPass: string): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
