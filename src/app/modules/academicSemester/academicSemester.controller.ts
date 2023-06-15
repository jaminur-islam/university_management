import { Request, RequestHandler, Response } from 'express';
import { academicServices } from './academicSemester.services';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createAcademicSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await academicServices.createAcademicSemester(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created',
      data: result,
    });
  }
);

export const academicSemesterController = { createAcademicSemester };
