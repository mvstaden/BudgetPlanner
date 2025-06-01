import { use, useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { GoPlus } from "react-icons/go";
import { FaEdit, FaTrash } from "react-icons/fa";
const expens = [
  {
    _id: 1234,
    expenseName: "FNB LOAN",
    amount: 100,
    duration: 60,
    installment: 1600,
  },
  {
    _id: 12345,
    expenseName: "Credit Card",
    amount: 100,
    duration: 38,
    installment: 900,
  },
  {
    _id: 123456,
    expenseName: "Credit Card",
    amount: 100,
    duration: 38,
    installment: 900,
  },
  {
    _id: 123457,
    expenseName: "Credit Card",
    amount: 100,
    duration: 38,
    installment: 900,
  },
  {
    _id: 123458,
    expenseName: "Credit Card",
    amount: 100,
    duration: 38,
    installment: 900,
  },
];

const Expense = () => {
  const [expenses, setExpenses] = useState(expens);

  const addExpense = (expense) => {
    setExpenses((currentExpense) => [...currentExpense, expense]);
  };

  return (
    <DashboardLayout>
      <div className="bg-gray-300 mx-5 p-6">
        <div className=" px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl">Expenses</h1>
          <button className="flex items-center gap-1 border border-cyan-200 p-2 text-sm rounded-xl bg-cyan-900 hover:bg-cyan-600 hover:text-cyan-900 text-white">
            <GoPlus className="w-5 h-5 text-white   cursor-pointer" />
            Add Expense
          </button>
        </div>
        {/* Expenses */}

        <div className="w-full p-4 bg-gray-500 flex gap-4">
          <div className="bg-pink-200 flex-1">
            <h1 className="text-xl">Daily Expenses</h1>
          </div>
          <div className="bg-blue-200 flex-1">
            <h1 className="text-xl">Loans</h1>
          </div>
        </div>

        <div className="flex justify-between items-center px-4 rounded-full bg-white">
          <span className="py-4 font-bold text-xl">Balance:</span>
          <span className="border-l  font-semibold px-8 py-4 text-lg">
            $1000
          </span>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Expense;
