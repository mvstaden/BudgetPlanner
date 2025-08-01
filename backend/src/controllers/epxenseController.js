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
    userId: req.user.id,
  });
  try {
    await newExpense.save();
    return res.status(200).json({ message: "Expense created" });
  } catch (error) {
    console.log("Error creating expense", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.userId });
    res.status(200).json(expenses);
  } catch (error) {
    console.log("Error getting all expenses", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getDailyTransactions = async (req, res) => {
  const userId = req.user.id;
  try {
    const dailyExpenses = await Expense.find({
      recurrenceType: "daily",
      userId: userId,
    });
    console.log(userId);
    return res.status(200).json(dailyExpenses);
  } catch (error) {
    console.log("Error getting daily transactions", error.message);
    return res.status(200).json({ message: "Server error" });
  }
};

export const getMonthlyExpenses = async (req, res) => {
  const userId = req.user.id;
  try {
    const monthlyExpenses = await Expense.find({
      recurrenceType: "monthly",
      userId: userId,
    });
    return res.status(200).json(monthlyExpenses);
  } catch (error) {
    console.log("Error getting monthly expenses", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};
