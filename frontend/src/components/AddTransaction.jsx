import { useState } from "react";

const AddTransaction = ({ onAddTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      description,
      amount,
      transactionType,
    };

    onAddTransaction(newTransaction);

    setDescription("");
    setAmount("");
  };

  return (
    <div className="bg-[#f6f8fb] shadow p-6 h-full flex flex-col rounded-2xl">
      <h2>Add Transaction</h2>
      <form className="h-full flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="description" className="block mb-2 font-medium">
            Description
          </label>
          <input
            className="w-full py-3 px-4 border-2 border-[#e2e8f0] rounded-lg bg-white transition-all ease-in focus:border-primaryGreen/35 focus:outline-none focus:shadow-sm"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 font-medium">Amount</label>
          <input
            className="w-full py-3 px-4 border-2 border-[#e2e8f0] rounded-lg bg-white transition-all ease-in focus:border-primaryGreen/35 focus:outline-none focus:shadow-sm"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
            required
          />
        </div>

        <div className="mb-5 flex items-center gap-5 ">
          <div className="flex items-center gap-2">
            <label className=" font-medium">Income</label>
            <input
              type="radio"
              value={"income"}
              name="type"
              className="accent-primaryGreen"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
            <label className="block  font-medium">Expense</label>
            <input
              type="radio"
              value={"expense"}
              name="type"
              className="accent-primaryRed"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-linear-[135deg] from-[#2e8b57] to-[#3cb371] text-white p-3.5 rounded-lg font-medium transition-all shadow-sm mt-auto border-none cursor-pointer hover:shadow-md hover:shadow-[#667eea4d] hover:-translate-y-0.5 hover:transition-transform"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};
export default AddTransaction;
