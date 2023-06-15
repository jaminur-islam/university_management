import mongoose from 'mongoose';
import { IGenericResponse } from '../interface/common';
import { IGenericErrorMessageDetails } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericResponse => {
  const error: IGenericErrorMessageDetails[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el.path,
        message: el.message,
      };
    }
  );

  return {
    statusCode: 422,
    message: 'validation error',
    errorDetails: error,
  };
};

export { handleValidationError };
