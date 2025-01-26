import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interfaces/error.interface';

const handleValidationError = (
  error: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(error.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );

  const statusCode = 400;

  return {
    statusCode,
    message: 'Mongoose validation error',
    errorSources,
  };
};

export default handleValidationError;
