import httpStatus from 'http-status';
import { ApiError } from '../../../errors/ApiError';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';

export const academicServices = {
  createAcademicSemester: async (
    payload: IAcademicSemester
  ): Promise<IAcademicSemester> => {
    if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
    }
    const result = await AcademicSemester.create(payload);
    return result;
  },
};
