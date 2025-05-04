import mongoose from "mongoose";
import Expense from "../models/expenseModel.js";

export const createExpense = async (req, res) => {
  const { name, amount, category, recurrenceType, date } = req.body;

  if (!name || !amount || !category || !recurrenceType || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newExpense = new Expense({
    name,
    amount,
    category,
    recurrenceType,
    date,
    userId: req.user._id,
  });
  try {
    await newExpense.save();
    return res.status(200).json({ message: "Expense created" });
  } catch (error) {
    console.log("Error creating expense", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};
