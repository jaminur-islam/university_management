import { ZodError, ZodIssue } from 'zod';
import { IGenericResponse } from '../interface/common';
import { IGenericErrorMessageDetails } from '../interface/error';

export const handleZodValidationError = (err: ZodError): IGenericResponse => {
  const error: IGenericErrorMessageDetails[] = err.issues.map(
    (issue: ZodIssue) => {
      return {
        path: issue.path[issue.path.length - 1],
        message: issue.message,
      };
    }
  );

  return {
    statusCode: 422,
    message: 'validation error',
    errorDetails: error,
  };
};
