import { CustomError } from "../utils/index.js";

export const notFoundErrorHandler = (req, res, next) => {
  const error = new CustomError("Endpoint not found", 404)
  next(error);
};

export const generalErrorHandler = (error, req, res, next) => {
  console.log('Error:-->', error.message)

  if (error.code === 400) {
    error.message = "Bad request";
  }

  res.status(error.code ?? 500).json({ error: error.message || 'General error' });
};