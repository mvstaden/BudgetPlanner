import DashboardLayout from "../../layouts/DashboardLayout";
import { IoMdCard } from "react-icons/io";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto my-5">
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
      </div>
    </DashboardLayout>
  );
};
export default DashboardPage;
