import { side_menu_urls } from "../../utils/data";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex bg-gray-200 p-4">
        <h1>Expense tracker</h1>
      </div>
      <div className="flex">
        <div className="h-[calc(100vh-56px)] w-64 bg-teal-300 sticky">
          <ul>
            {side_menu_urls.map((link) => (
              <li>
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="bg-pink-200 w-full p-5">
          <div>
            <h2 className="text-3xl text-center">Income</h2>
            <div className="flex items-center justify-between p-10">
              <div>
                <h3 className="text-lg capitalize">Income sources</h3>
                <p className="text-gray-400 text-sm">Track all your incomes</p>
              </div>

              <button className="bg-teal-800 text-white p-3 rounded-lg hover:bg-teal-700 cursor-pointer">
                Add income
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
