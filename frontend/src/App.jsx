import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TransactionPage from "./pages/TransactionPage";
import ExpensePage from "./pages/ExpensePage";
import IncomePage from "./pages/IncomePage";
import MainLayout from "./components/Layout/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/expense" element={<ExpensePage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/settings" element={<IncomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
