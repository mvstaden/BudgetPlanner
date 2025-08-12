import { useEffect, useState } from "react";
import AddTransaction from "../components/AddTransaction";
import Transactions from "../components/Transactions";
import { FaHome } from "react-icons/fa";
import Balance from "../components/Balance";

const HomePage = () => {
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
      <div className="max-w-6xl w-full flex h-[850px]">
        <aside className="w-64 bg-gray-500 h-full">
          <div>
            <h1>Expense</h1>
          </div>
          <nav>
            <ul>
              <li>Dashboard</li>
              <li>Income</li>
              <li>Expenses</li>
              <li>Transactions</li>
              <li>Settings</li>
            </ul>
          </nav>
        </aside>
        <div
          className=" w-full bg-white 
        rounded-3xl shadow overflow-auto flex "
        >
          <div className="px-8 pt-8">
            <h1 className="text-center text-4xl mb-8 tracking-tight ">
              Expense Tracker
            </h1>

            {/* Balance container */}
            <Balance income={income} expense={expense} />

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
        </div>
      </div>
    </div>
  );
};
export default HomePage;
