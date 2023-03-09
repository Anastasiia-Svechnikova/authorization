export interface IUser {
  email: string;
  password: string;
}
export enum Role {
  admin = 'Admin',
  user = 'User',
}
export type Token = string | null;

export interface IApiLoginResponse {
  first_name: string;
  last_name: string;
  role: string;
  token: string;
}
export type localStorageUser = IApiLoginResponse | null;
