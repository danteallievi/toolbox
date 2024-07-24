import { CustomError } from "../utils/index.js";

const checkAuthorization = (req, res, next) => {
  const UnauthorizedError = new CustomError('Unauthorized', 401);
  const authHeader = req.header("authorization");
  const secretKeyFromRequest = authHeader?.split("Bearer ")[1];

  if (!secretKeyFromRequest) {
    next(UnauthorizedError);
  }

  const secretKeyValue = process.env.SECRET_KEY || 'aSuperSecretKey'
  if (secretKeyFromRequest === secretKeyValue) {
    // Authorized user
    req.secretKey = secretKeyFromRequest
    next()
  } else {
    next(UnauthorizedError);
  }
};

export default checkAuthorization;