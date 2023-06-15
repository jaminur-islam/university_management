import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({}),
  }),
});

export const userValidation = {
  createUserZodSchema,
};
