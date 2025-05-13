import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decodedToken) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    const user = await User.findById(decodedToken.userId);
    if (!user) {
      return res.status(404).json({ message: "Invalid user" });
    }
    req.userId = user._id;
    req.user = user;
    next();
  } catch (error) {
    console.log("Error authenticating user", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};
