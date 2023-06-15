import { z } from 'zod';
import { codes, months, titles } from './academicSemester.constant';

const createAcademicZodSchema = z.object({
  body: z.object({
    title: z.enum([...titles] as [string, ...string[]]),
    year: z.number(),
    code: z.enum([...codes] as [string, ...string[]]),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

export const academicValidation = {
  createAcademicZodSchema,
};
