import { Router } from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { academicValidation } from './academicSemester.validation';
import { academicSemesterController } from './academicSemester.controller';

const router = Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicValidation.createAcademicZodSchema),
  academicSemesterController.createAcademicSemester
);

export const semesterRouter = router;
