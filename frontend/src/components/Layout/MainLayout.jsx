import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="bg-amber-200 flex-1">
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
