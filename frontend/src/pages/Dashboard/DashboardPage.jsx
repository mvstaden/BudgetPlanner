import { FaEdit, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../layouts/DashboardLayout";
import { IoMdCard } from "react-icons/io";
import Transaction from "../../components/Transaction";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex gap-5 p-5 bg-white shadow-md rounded-2xl border border-gray-200/50">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl">
              <IoMdCard />
            </div>
            <div>
              <h6 className="text-sm text-gray-500 mb-1">Total Expenses</h6>
              <p className="text-xl">Total: $10000</p>
            </div>
          </div>
          <div className="flex gap-5 p-5 bg-white shadow-md rounded-2xl">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-2xl">
              <IoMdCard />
            </div>
            <div>
              <h6 className="text-sm text-gray-500 mb-1">Total Expenses</h6>
              <p className="text-xl">Total: $10000</p>
            </div>
          </div>
          <div className="flex gap-6 p-6 bg-white shadow-md rounded-2xl">
            <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-2xl">
              <IoMdCard />
            </div>
            <div>
              <h6 className="text-sm text-gray-500 mb-1">Total Expenses</h6>
              <p className="text-xl">Total: $10000</p>
            </div>
          </div>
          <div className="flex gap-6 p-6 bg-white shadow-md rounded-2xl">
            <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-2xl">
              <IoMdCard />
            </div>
            <div>
              <h6 className="text-sm text-gray-500 mb-1">Daily Budget</h6>
              <p className="text-xl">Total:$350</p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-white p-4 rounded-2xl mt-5">
          <h1 className="text-2xl">Overview</h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, amet. `
          </p>
          <div className="flex">
            {/* Graph */}
            <div className="flex-1 bg-pink-50 h-[500px]"></div>
            {/* Legend */}
            <div className="flex-1 bg-blue-50"></div>
          </div>
        </div>

        {/* Recent Expenses */}
        <div className="bg-white p-5 mt-5 rounded-2xl">
          <div className="flex justify-between items-center">
            <h3 className="text-xl">Recent Expenses</h3>
            <p className="text-cyan-800 hover:text-cyan-600 cursor-pointer">
              View All
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <div className="flex items-center justify-between bg-gray-500 p-3 rounded-xl">
              <h4>Name</h4>
              <h4>Amount</h4>
              <h4>Date</h4>
              <h4>Actions</h4>
            </div>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
          </div>
        </div>
      </div>
      {/* <div className="mx-auto my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex gap-6 p-6 bg-white shadow-md rounded-2xl border border-gray-200/50">
            <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-2xl">
              <IoMdCard />
            </div>
            <div>
              <h6 className="text-sm text-gray-500 mb-1">Total Expenses</h6>
              <p className="text-xl">Total: $10000</p>
            </div>
          </div>
          <div className="flex gap-6 p-6 bg-white shadow-md rounded-2xl">
            <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-2xl">
              <IoMdCard />
            </div>
            <div>
              <h6 className="text-sm text-gray-500 mb-1">Total Expenses</h6>
              <p className="text-xl">Total: $10000</p>
            </div>
          </div>
          <div className="flex gap-6 p-6 bg-white shadow-md rounded-2xl">
            <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-2xl">
              <IoMdCard />
            </div>
            <div>
              <h6 className="text-sm text-gray-500 mb-1">Total Expenses</h6>
              <p className="text-xl">Total: $10000</p>
            </div>
          </div>
          <div className="flex gap-6 p-6 bg-white shadow-md rounded-2xl">
            <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-2xl">
              <IoMdCard />
            </div>
            <div>
              <h6 className="text-sm text-gray-500 mb-1">Daily Budget</h6>
              <p className="text-xl">Total:$350</p>
            </div>
          </div>
        </div>
      </div> */}
    </DashboardLayout>
  );
};
export default DashboardPage;
