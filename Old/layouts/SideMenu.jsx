const SideMenu = ({ user }) => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200/50 p-5 sticky z-20">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        {user?.profileImageUrl ? (
          <img src={user?.profileImageUrl || ""} alt="" />
        ) : (
          <div className="w-20 h-20 text-xl flex items-center justify-center rounded-full text-gray-900 font-medium bg-gray-100">
            {user?.fullName}
          </div>
        )}
      </div>
    </div>
  );
};
export default SideMenu;
