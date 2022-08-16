import { Route, Routes } from "react-router-dom";

import HomePage from "./pages";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
