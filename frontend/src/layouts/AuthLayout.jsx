import { LuTrendingDown } from "react-icons/lu";
import Card_2 from "../assets/images/card2.png";
const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Side - Forms */}
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children}
      </div>

      {/* Right Side - Images */}
      <div className="hidden md:block w-[40vw] h-screen bg-cyan-50  bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-cyan-600 absolute -top-7 -left-5"></div>
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-cyan-800 absolute top-[30%] -right-10"></div>
        <div className="w-48 h-48 rounded-[40px] bg-cyan-400 absolute -bottom-7 -left-5"></div>

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingDown />}
            label="Track Your income & Expenses"
            value="430,000"
            color="bg-primary"
          />
        </div>
        <img
          src={Card_2}
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15"
          alt=""
        />
      </div>
    </div>
  );
};
const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white z-10 p-4 rounded-xl shadow-md shadow-cyan-600/10 border border-gray-200/50">
      <div
        className={`w-12 h-12 flex items-center justify-center text-white rounded-full drop-shadow-xl ${color}`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-sm text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">${value}</span>
      </div>
    </div>
  );
};
export default AuthLayout;
