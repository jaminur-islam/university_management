import { Request, Response } from 'express';
import { academicServices } from './academicSemester.services';
import { catchAsync } from '../../../shared/catchAsync';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await academicServices.createAcademicSemester(req.body);
    return res.send({ status: true, data: result });
  }
);

export const academicSemesterController = { createAcademicSemester };
