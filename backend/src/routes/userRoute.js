import express from "express";
import {
  login,
  logout,
  signup,
  userAuth,
} from "../controllers/userController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/user", protectRoute, userAuth);

export default router;
