const Balance = ({ income, expense }) => {
  const balance = 0;
  return (
    <div className="bg-linear-[135deg] from-[#a8d5ba] to-[#6b8e23] p-6 rounded-2xl shadow-sm mb-6 text-center">
      <h2>Your balance</h2>
      <h1 className="text-4xl">${balance}</h1>

      {/* Summary container */}
      <div className="grid sm:grid-cols-2 gap-6 grid-cols-1 mt-6">
        <div className="bg-white p-6 rounded-2xl hover:-translate-y-[2px] transition-transform">
          <h3 className="text-xl text-primaryGreen font-medium">Income</h3>
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
  );
};
export default Balance;
