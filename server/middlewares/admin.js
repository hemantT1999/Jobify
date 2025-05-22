import { UnAuthenticatedError } from "../errors/index.js";

const adminMiddleware = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    throw new UnAuthenticatedError("Not authorized as admin");
  }
};

export default adminMiddleware;
