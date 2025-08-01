const Transactions = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className="w-full">
      <h2>Transactions</h2>
      {transactions.length > 0 && (
        <ul className="overflow-y-auto pr-2">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className={`flex items-center justify-between px-5 py-4 mb-3 rounded-xl shadow-md transition-all animate-slideIn border-x-[3px] ${
                transaction.transactionType === "income"
                  ? " border-primaryGreen"
                  : "border-primaryRed"
              }`}
            >
              <span>{transaction.description}</span>
              <span>
                {transaction.amount}

                <button
                  className="text-primaryRed hover:bg-primaryRed/15 cursor-pointer py-1 px-2 rounded-sm opacity-0 hover:opacity-100 ml-3"
                  onClick={() => onDeleteTransaction(transaction.id)}
                >
                  X
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Transactions;
