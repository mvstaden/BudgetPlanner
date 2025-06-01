import { Outlet } from "react-router-dom";
import SideMenu from "../components/Common/SideMenu";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <SideMenu />
      <div className="flex-1 mx-5 my-5">{children}</div>
    </div>
  );
};
export default DashboardLayout;
