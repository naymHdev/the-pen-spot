import { TRole, TUserStatus } from './user.interface';

export const USER_ROLE = {
  user: 'user',
  admin: 'admin',
};
export const Role: TRole[] = ['admin', 'user'];

export const Status: TUserStatus[] = ['active', 'blocked'];
