import mongoose from "mongoose";

const RecurrenceType = ["once", "daily", "weekly", "monthly", "yearly"];

const expenseSchema = new mongoose.Schema(
  {
    expenseName: { type: String, required: true },
    recurrenceType: { type: String, required: true, enum: RecurrenceType },
    amount: { type: Number, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      default: "daily",
    },
    notes: { type: String, default: "" },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
