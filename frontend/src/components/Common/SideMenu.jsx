import { Link, NavLink } from "react-router-dom";
import { side_menu_urls } from "../../utils/data";
import { LuFan } from "react-icons/lu";

const SideMenu = () => {
  return (
    <div className="w-80 min-h-screen bg-gray-100 p-6 flex flex-col gap-10">
      <div className="px-3 py-2 flex items-center gap-4 ">
        <LuFan className="text-2xl" />
        <Link to="/" className="text-2xl font-medium ">
          Budget Tracker
        </Link>
      </div>

      <nav className="flex flex-col gap-4  ">
        {side_menu_urls.map((link) => (
  <div key={link.id  }>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-white py-4 px-3 bg-cyan-900 flex items-center rounded-lg space-x-2"
                  : "flex items-center rounded-lg text-black hover:bg-cyan-900 hover:text-white px-3 py-4 space-x-2"
              }
              to={link.path}
            >
              <link.icon className="text-xl" />
              <span className="text-xl">{link.label}</span>
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  );
};
export default SideMenu;
