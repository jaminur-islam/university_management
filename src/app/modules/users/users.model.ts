import { Schema, model, Model } from 'mongoose'
import { IUser } from './users.interface'

type UserModel = Model<IUser, object>

const usersSchema = new Schema<IUser, UserModel>(
  {
    id: { type: String, unique: true, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const User = model<IUser, UserModel>('User', usersSchema)
