import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import config from '../../config';
import { IGenericErrorMessageDetails } from '../../interface/error';
import { handleValidationError } from '../../errors/handleValidationError';
import { ApiError } from '../../errors/ApiError';
import { errorLogger } from '../../shared/logger';
import { ZodError } from 'zod';
import { handleZodValidationError } from '../../errors/handleZodValidationError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  errorLogger.error('errorhandler', err);

  let statusCode = 500;
  let message = 'Something went wrong !';
  let errorDetails: IGenericErrorMessageDetails[] = [];

  if (err?.name === 'ValidationError') {
    const validationError = handleValidationError(err);
    errorDetails = validationError.errorDetails;
    message = validationError.message;
    statusCode = validationError.statusCode;
  } else if (err instanceof ZodError) {
    const zodValidationError = handleZodValidationError(err);
    errorDetails = zodValidationError.errorDetails;
    message = zodValidationError.message;
    statusCode = zodValidationError.statusCode;
  } else if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
    errorDetails = err?.message
      ? [
          {
            path: req.originalUrl,
            message: err?.message,
          },
        ]
      : [];
  } else if (err instanceof Error) {
    message = err.message;
    errorDetails = err?.message
      ? [
          {
            path: req.originalUrl,
            message: err?.message,
          },
        ]
      : [];
  }
  next();
  return res.status(statusCode).json({
    status: false,
    code: statusCode,
    message: message,
    details: errorDetails,
    stack: config.node_env !== 'production' ? err.stack : undefined,
  });
};

const routesNotFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new ApiError(404, 'not found');
  next(error);
};

export { globalErrorHandler, routesNotFound };
