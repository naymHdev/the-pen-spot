export type TRole = "admin" | "user";
export type TUserStatus = "active" | "blocked";

export type TUser = {
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
};
