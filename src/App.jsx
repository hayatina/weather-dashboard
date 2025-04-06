import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import HomePage from "./component/HomePage";
import Header from "./component/Header";
import WeatherDisplay from "./component/WeatherDisplay";
import ForecastPage from "./component/ForecastPage";
import WelcomePage from "./component/Welcomepage"; 
import AboutPage from "./pages/AboutPage";  
import ContactPage from "./pages/ContactPage";

import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/forecast/:city" element={<ForecastPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
