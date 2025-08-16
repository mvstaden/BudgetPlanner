import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-linear-[135deg] from-[#2e8b57] to-[#a8d5ba] flex items-center justify-center p-5">
      <div className="max-w-6xl w-full h-[850px]">
        <Sidebar />
      </div>
    </div>
  );
};
export default MainLayout;
