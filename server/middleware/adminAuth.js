import { UnAuthenticatedError } from "../errors/index.js";

const adminAuth = async (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    throw new UnAuthenticatedError("Not authorized as admin");
  }
  next();
};

export default adminAuth;
