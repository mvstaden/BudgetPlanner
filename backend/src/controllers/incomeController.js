import Income from "../models/incomeModel.js";

export const createIncome = async (req, res) => {
  const { name, amount, source, recurrenceType, date } = req.body;

  if (!name || !amount || !source || !recurrenceType || !date) {
    return res.status(404).json({ message: "All fields are required" });
  }

  const newIncome = new Income({
    name,
    amount,
    source,
    recurrenceType,
    date,
    userId: req.user._id,
  });
  try {
    await newIncome.save();
    return res.status(200).json({ message: "Income created" });
  } catch (error) {
    console.log("Error creating income");
    return res.status(500).json({ message: "Server error" });
  }
};
