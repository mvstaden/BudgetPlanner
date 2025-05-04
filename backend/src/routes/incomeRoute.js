import express from "express";

import { protectRoute } from "../middleware/authMiddleware.js";
import { createIncome } from "../controllers/incomeController.js";

const router = express.Router();

router.post("/", protectRoute, createIncome);

export default router;
