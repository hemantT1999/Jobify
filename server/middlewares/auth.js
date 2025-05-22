import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";
import User from "../models/user.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.userId).select("role");
    req.user = {
      userId: payload.userId,
      role: user.role,
    };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};

const checkAdminRole = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user || user.role !== "admin") {
      throw new UnAuthenticatedError("Not authorized as admin");
    }
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Not authorized as admin");
  }
};

export { auth, checkAdminRole };
