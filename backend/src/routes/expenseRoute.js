import express from "express";
import {
  createExpense,
  getDailyTransactions,
  getExpenses,
  getMonthlyExpenses,
} from "../controllers/epxenseController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protectRoute, createExpense);
router.get("/", protectRoute, getExpenses);
router.get("/daily", protectRoute, getDailyTransactions);
router.get("/monthly", protectRoute, getMonthlyExpenses);

export default router;
