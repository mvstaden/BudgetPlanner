import { useState } from "react";
import SideMenu from "./SideMenu";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Navbar />

      <SideMenu user={user} />

      <div className="grow mx-5">{children}</div>
    </div>
  );
};
export default DashboardLayout;
