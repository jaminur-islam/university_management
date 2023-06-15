import { RequestHandler } from 'express';
import { academicServices } from './academicSemester.services';

const createAcademicSemester: RequestHandler = async (req, res, next) => {
  try {
    const result = await academicServices.createAcademicSemester(req.body);
    return res.send({ status: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const academicSemesterController = { createAcademicSemester };
