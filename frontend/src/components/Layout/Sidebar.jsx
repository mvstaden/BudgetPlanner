import { Link, NavLink } from "react-router-dom";
import { dashboardLinks } from "../../lib/data";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 fixed bottom-0 left-0 right-0 md:relative md:pl-0 px-4 pt-2 rounded-t-lg transition-all md:w-[300px]">
      <div className="hidden md:block text-white px-8 py-10">
        <h1 className="text-3xl">FInance</h1>
      </div>
      <nav className="flex md:w-full md:flex-col justify-between">
        {dashboardLinks.map(({ path, text, Icon }) => (
          <NavLink
            to={path}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-white border-b-4 border-green-600 rounded-t-lg md:border-l-4 md:border-b-0 md:rounded-r-lg md:rounded-t-none"
                  : "text-gray-300"
              } pb-2 pt-2 flex md:flex-row md:justify-start sm:w-[104px] items-center md:w-full md:px-8 justify-center sm:flex-col w-full md:gap-4 gap-1`
            }>
            <Icon className="size-7 " />
            <span className="hidden sm:block sm:text-xs">{text}</span>
          </NavLink>
        ))}
        {/* <Link className="bg-white pb-3 pt-2 w-full  flex items-center justify-center border-b-4 border-green-600 rounded-t-lg">
          <MdDashboard className="h-6 w-6 text-green-600" />
        </Link>
        <Link
          className={`${
            active
              ? "bg-white border-b-4 border-green-600 rounded-t-lg"
              : "text-gray-300"
          } pb-3 pt-2 w-full flex items-center justify-center `}>
          <MdDashboard className="h-6 w-6" />
        </Link>
        <Link className="bg-white pb-3 pt-2  w-full flex items-center justify-center border-b-4 border-green-600 rounded-t-lg">
          <MdDashboard className="h-6 w-6" />
        </Link>
        <Link className="bg-white pb-3 pt-2 w-full flex items-center justify-center border-b-4 border-green-600 rounded-t-lg">
          <MdDashboard className="h-6 w-6" />
        </Link>
        <Link className="bg-white pb-3 pt-2 w-full flex items-center justify-center border-b-4 border-green-600 rounded-t-lg">
          <MdDashboard className="h-6 w-6" />
        </Link>
        <Link className="bg-white pb-3 pt-2 w-full flex items-center justify-center border-b-4 border-green-600 rounded-t-lg">
          <MdDashboard className="h-6 w-6" />
        </Link> */}
      </nav>
    </div>
  );
};
export default Sidebar;
