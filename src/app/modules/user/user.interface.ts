import { Document, Model } from 'mongoose';

export type IUser = Document & {
  id: string;
  role: string;
  password: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
