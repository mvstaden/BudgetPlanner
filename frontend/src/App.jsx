import { useEffect, useState } from "react";
import AddTransaction from "./components/AddTransaction";
import Transactions from "./components/Transactions";
import { FaHome } from "react-icons/fa";
const App = () => {
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    try {
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState("");

  // let income = 0;

  const handleIncome = () => {
    const totalIncome = transactions
      .filter((transaction) => transaction.transactionType === "income")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    setIncome(totalIncome);
  };
  const handleExpense = () => {
    const totalExpense = transactions
      .filter((transaction) => transaction.transactionType === "expense")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    setExpense(totalExpense);
  };

  const handleBalance = () => {
    const totalBalance = transactions.reduce(
      (acc, transaciton) => acc + transaciton.amount,
      0
    );
    setBalance(totalBalance);
  };

  // console.log(transactions);

  const addTransaction = (transaction) => {
    setTransactions((currentTransaction) => [
      ...currentTransaction,
      transaction,
    ]);

    // handleIncome();
  };
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    handleExpense();
    handleIncome();
    handleBalance();
  }, [transactions]);

  const deleteTransaction = (id) => {
    const newTransaction = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(newTransaction);
  };

  return (
    <div className="min-h-screen bg-linear-[135deg] from-[#2e8b57] to-[#a8d5ba] flex items-center justify-center p-5">
      <div
        className="max-w-5xl w-full bg-white 
       rounded-3xl shadow overflow-auto "
      >
        <div className="px-8 pt-8">
          <h1 className="text-center text-4xl mb-8 tracking-tight ">
            Expense Tracker
          </h1>

          {/* Balance container */}
          <div className="bg-linear-[135deg] from-[#a8d5ba] to-[#6b8e23] p-6 rounded-2xl shadow-sm mb-6 text-center">
            <h2>Your balance</h2>
            <h1 className="text-4xl">${balance}</h1>

            {/* Summary container */}
            <div className="grid sm:grid-cols-2 gap-6 grid-cols-1 mt-6">
              <div className="bg-white p-6 rounded-2xl hover:-translate-y-[2px] transition-transform">
                <h3 className="text-xl text-primaryGreen font-medium">
                  Income
                </h3>
                <p className="md:text-3xl text-2xl mt-2  font-semibold text-primaryGreen">
                  ${income}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl hover:-translate-y-[2px] transition-transform">
                <h3 className="text-xl text-primaryRed font-medium">Expense</h3>
                <p className="md:text-3xl text-2xl mt-2 font-semibold text-primaryRed">
                  ${expense}
                </p>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {/* Transactions container */}
            <Transactions
              transactions={transactions}
              onDeleteTransaction={deleteTransaction}
            />
            {/* Form container */}
            <AddTransaction onAddTransaction={addTransaction} />
          </div>
        </div>
        {/* Nav section */}
        <div className="flex items-center justify-around w-full  border-t border-gray-200  mt-4">
          <div className="flex flex-col items-center hover:bg-gray-200 h-full w-full p-4 border-r border-gray-200">
            <span>
              <FaHome />
            </span>
            <a href="#">Home</a>
          </div>
          <div className="flex flex-col items-center hover:bg-gray-200 h-full w-full p-4 border-r border-gray-200">
            <span>
              <FaHome />
            </span>
            <a href="#">Transactions</a>
          </div>
          <div className="flex flex-col items-center hover:bg-gray-200 h-full w-full p-4 border-r border-gray-200">
            <span>
              <FaHome />
            </span>
            <a href="#">Expenses</a>
          </div>
          <div className="flex flex-col items-center hover:bg-gray-200 h-full w-full p-4">
            <span>
              <FaHome />
            </span>
            <a href="#">Income</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
