import mongoose from "mongoose";

const RecurrenceType = ["once", "daily", "weekly", "monthly", "yearly"];

const expenseSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true }, // eg. Groceries,fuel
    recurrenceType: {
      type: String,
      enum: ["daily", "monthly"],
      required: true,
    },
    date: { type: Date, required: true }, //When the expense occurs
    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
