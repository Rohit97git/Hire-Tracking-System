import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
import Applicants from "./pages/Applicants";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/applicants" element={<Applicants />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
