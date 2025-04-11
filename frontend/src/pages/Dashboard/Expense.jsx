import DashboardLayout from "../../layouts/DashboardLayout";
import { FaEdit, FaTrash } from "react-icons/fa";
const expenses = [
  {
    _id: 1234,
    expenseName: "FNB LOAN",
    amount: 130000,
    duration: 60,
    installment: 1600,
  },
  {
    _id: 12345,
    expenseName: "Credit Card",
    amount: 50000,
    duration: 38,
    installment: 900,
  },
  {
    _id: 123456,
    expenseName: "Credit Card",
    amount: 50000,
    duration: 38,
    installment: 900,
  },
  {
    _id: 123457,
    expenseName: "Credit Card",
    amount: 50000,
    duration: 38,
    installment: 900,
  },
  {
    _id: 123458,
    expenseName: "Credit Card",
    amount: 50000,
    duration: 38,
    installment: 900,
  },
];

const Expense = () => {
  return (
    <DashboardLayout>
      <div className="bg-gray-300 mx-5 p-6">
        <div className="bg-red-100 p-4">
          <h1 className="text-3xl">Expenses</h1>
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
            $100000
          </span>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Expense;
