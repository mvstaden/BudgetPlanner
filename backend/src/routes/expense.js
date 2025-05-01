import express from "express";
import { createExpense } from "../controllers/epxenseController.js";

const router = express.Router();

router.post("/", protectRoute, createExpense);

export default router;
