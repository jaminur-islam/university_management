import config from '../../../config';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateIncrementalId } from './user.util';

export const userServices = {
  createUser: async (user: IUser): Promise<IUser | null> => {
    const id = await generateIncrementalId();
    user.id = id;

    if (!user.password) {
      user.password = config.default_password as string;
    }
    const createNewUser = await User.create(user);
    await createNewUser.save();

    // if (!createNewUser) {
    //   throw new ApiError(400, 'user not created')
    // }
    return createNewUser;
  },

  getAllUser: async (): Promise<IUser[]> => {
    const createNewUser = await User.find({});
    return createNewUser;
  },
};
