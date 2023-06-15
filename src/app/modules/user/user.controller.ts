import { Request, RequestHandler, Response } from 'express';
import { userServices } from './user.services';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await userServices.createUser(req.body);
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created',
    data: result,
  });
});

const getAllUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await userServices.getAllUser();
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: null,
      data: result,
    });
  }
);

export const userController = { createUser, getAllUser };
