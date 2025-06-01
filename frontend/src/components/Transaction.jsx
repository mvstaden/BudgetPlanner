import { FaEdit, FaTrash } from "react-icons/fa";

const Transaction = () => {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50">
      <h4>Name</h4>
      <h4>Amount</h4>
      <h4>Date</h4>
      <div className="flex items-center gap-4">
        <span className="hover:text-yellow-300 text-yellow-500">
          <FaEdit />
        </span>
        <span className="text-red-500 hover:text-red-300">
          <FaTrash />
        </span>
      </div>
    </div>
  );
};
export default Transaction;
