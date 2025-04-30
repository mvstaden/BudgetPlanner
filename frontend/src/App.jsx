import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import Expense from "./pages/Dashboard/Expense";
import Income from "./pages/Dashboard/Income";
import Loans from "./pages/Dashboard/Loans";
import DailyTransactions from "./pages/Dashboard/DailyTransactions";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/income" element={<Income />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/daily" element={<DailyTransactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
