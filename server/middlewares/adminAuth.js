import { UnAuthenticatedError } from "../errors/index.js";

const adminAuth = (req, res, next) => {
  if (req.user.role !== 'admin') {
    throw new UnAuthenticatedError("Not authorized as admin");
  }
  next();
};

export default adminAuth;