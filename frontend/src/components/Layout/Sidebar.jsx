import { dashboardLinks } from "../../lib/data";

const Sidebar = () => {
  return (
    <aside className=" bg-gray-500 w-96 p-6">
      <div className="text-center mb-5 border-b border-green-300">
        <h1 className="text-3xl mb-5">Budgie</h1>
      </div>
      <nav className=" ">
        <div className="flex flex-col gap-4">
          {dashboardLinks.map(({ path, text, Icon }) => (
            <Link
              key={text}
              to={path}
              className="pl-4 pr-8 py-4 w-full flex items-center justify-start text-xl border-x-[3px] shadow hover:border-x-[3px] hover:border-green-400   bg-white rounded-2xl">
              <Icon className="w-5 h-5 mr-2" />
              {text}
            </Link>
          ))}
          {/* <li className="pl-4 pr-8 py-4 w-full flex items-center justify-start text-xl border-x-[3px] shadow hover:border-x-[3px] hover:border-green-400   bg-white rounded-2xl">
                  <MdOutlineDashboard className="w-5 h-5 mr-2" />
                  Dashboard
                </li>
                <li className="pl-4 pr-8 py-4 w-full flex items-center justify-start text-xl border-x-[3px] shadow hover:border-x-[3px] hover:border-green-400   bg-white rounded-2xl">
                  Income
                </li>
                <li className="pl-4 pr-8 py-4 w-full flex items-center justify-start text-xl border-x-[3px] shadow hover:border-x-[3px] hover:border-green-400   bg-white rounded-2xl">
                  Expenses
                </li>
                <li className="pl-4 pr-8 py-4 w-full flex items-center justify-start text-xl border-x-[3px] shadow hover:border-x-[3px] hover:border-green-400   bg-white rounded-2xl">
                  Transactions
                </li>
                <li className="pl-4 pr-8 py-4 w-full flex items-center justify-start text-xl border-x-[3px] shadow hover:border-x-[3px] hover:border-green-400   bg-white rounded-2xl">
                  Settings
                </li> */}
        </div>
      </nav>
    </aside>
  );
};
export default Sidebar;
