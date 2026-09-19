import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import { LanguageProvider } from "./i18n/LanguageContext";
import { SimulationProvider } from "./context/SimulationContext";

import Home from "./pages/Home";
import FloodMap from "./pages/FloodMap";
import AuthorityDashboard from "./pages/AuthorityDashboard";
import PublicAlerts from "./pages/PublicAlerts";

function App() {
  return (
    <LanguageProvider>
      <SimulationProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<FloodMap />} />
            <Route path="/authority" element={<AuthorityDashboard />} />
            <Route path="/alerts" element={<PublicAlerts />} />
          </Routes>
        </BrowserRouter>
      </SimulationProvider>
    </LanguageProvider>
  );
}

export default App;
