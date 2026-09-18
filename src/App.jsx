import PublicAlerts from "./pages/PublicAlerts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import FloodMap from "./pages/FloodMap";
import AuthorityDashboard from "./pages/AuthorityDashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<FloodMap />} />
        <Route path="/authority" element={<AuthorityDashboard />} />
        <Route path="/alerts" element={<PublicAlerts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;