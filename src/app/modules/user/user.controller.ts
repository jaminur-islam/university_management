import { RequestHandler } from 'express';
import { userServices } from './user.services';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await userServices.createUser(req.body);
    return res.send({ status: true, data: user });
  } catch (err) {
    next(err);
  }
};
const getAllUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await userServices.getAllUser();
    res.send({ status: true, data: user });
    next();
  } catch (err) {
    if (err instanceof Error) {
      next(err);
    } else {
      next(err);
    }
  }
};

export const userController = { createUser, getAllUser };
