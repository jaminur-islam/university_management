import { Document } from 'mongoose'

export type IUser = Document & {
  id: string
  role: string
  password: string
}
