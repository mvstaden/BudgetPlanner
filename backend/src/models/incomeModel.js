import mongoose, { mongo } from "mongoose";

const incomeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  source: { type: String, required: true },
  recurrenceType: {
    type: String,
    enum: ["onceOff", "daily", "monthly"],
    required: true,
  },
  date: { type: Date, required: true },
});

const Income = mongoose.model("Income", incomeSchema);

export default Income;
