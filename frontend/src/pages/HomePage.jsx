import { useEffect, useState } from "react";
import AddTransaction from "../components/AddTransaction";
import Transactions from "../components/Transactions";
import { MdOutlineDashboard } from "react-icons/md";
import Balance from "../components/Balance";
import { dashboardLinks } from "../lib/data";
import { Link } from "react-router-dom";

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
  const [balance, setBalance] = useState(0);

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
      <div className="max-w-6xl w-full h-[850px]">
        <div className="bg-white rounded-3xl shadow overflow-auto h-full flex">
         
          <div className="px-8 pt-8 w-full">
            <h1 className="text-center text-4xl mb-8 tracking-tight ">
              Expense Tracker
            </h1>

            {/* Balance container */}
            <Balance income={income} expense={expense} balance={balance} />

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
