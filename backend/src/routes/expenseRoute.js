import express from "express";
import {
  createExpense,
  getExpenses,
} from "../controllers/epxenseController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protectRoute, createExpense);
router.get("/", protectRoute, getExpenses);

export default router;
