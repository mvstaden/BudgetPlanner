import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TransactionPage from "./pages/TransactionPage";
import ExpensePage from "./pages/ExpensePage";
import IncomePage from "./pages/IncomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/transaction" element={<TransactionPage />} />
      <Route path="/expense" element={<ExpensePage />} />
      <Route path="/income" element={<IncomePage />} />
      {/* <Route path="/" element={<HomePage />} /> */}
    </Routes>
  );
};

export default App;
