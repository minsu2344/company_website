import { Document } from 'mongoose'

interface IUser {
  username: string;
  password: string;
  isLoggedIn: boolean;
  isActive: boolean;
  failedLoginAttempts: number;
  lastLoginAttempt: Date;
  ipAddress: string;
  createdAt: Date;
}

interface ISchemaUser extends IUser, Document {}

export { IUser, ISchemaUser }