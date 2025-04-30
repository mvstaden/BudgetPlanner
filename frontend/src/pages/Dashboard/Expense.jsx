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

        <table className="min-w-full mt-4 text-left border-separate  border-spacing-y-2">
          <thead className="bg-gray-600 text-white rounded-2xl">
            <tr>
              <th className="py-4 px-4 rounded-l-full">Expense name</th>
              <th className="py-4 px-4">Amount</th>
              <th className="py-4 px-4">Duration</th>
              <th className="py-4 px-4">Installment</th>
              <th className="py-4 px-4 rounded-r-full">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense._id} className="bg-white">
                <td className="p-4 rounded-l-full">{expense.expenseName}</td>
                <td className="p-4">{expense.amount}</td>
                <td className="p-4">{expense.duration}</td>
                <td className="p-4">{expense.installment}</td>
                <td className="p-4  rounded-r-full">
                  <div className="flex items-center gap-6">
                    <span>
                      <FaEdit className="text-yellow-500" />
                    </span>
                    <span>
                      <FaTrash className="text-red-500" />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
