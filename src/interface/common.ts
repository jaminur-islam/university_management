import { IGenericErrorMessageDetails } from './error';

export type IGenericResponse = {
  statusCode: number;
  message: string;
  errorDetails: IGenericErrorMessageDetails[];
};
