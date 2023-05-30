import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateIncrementalId } from './users.util'

export const usersServices = {
  createUser: async (user: IUser): Promise<IUser | null> => {
    const id = await generateIncrementalId()
    user.id = id

    if (!user.password) {
      user.password = config.default_password as string
    }
    const createNewUser = await User.create(user)
    await createNewUser.save()
    return createNewUser
  },
  getAllUsers: async (): Promise<IUser[]> => {
    const createNewUser = await User.find({})
    return createNewUser
  },
}
