import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import Expense from "./pages/Dashboard/Expense";
import Income from "./pages/Dashboard/Income";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
