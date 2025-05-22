import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Manage mobile menu state

  return (
    <header className="shadow-md bg-blue-600 text-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">🌤️ WeatherApp</Link>
        </div>

        {/* Navigation + Toggle */}
        <nav className="flex items-center justify-between w-full">
          {/* Links for Large Screens */}
          <div className={`hidden md:flex space-x-6 md:space-x-10 ml-auto`}>
           
            <Link to="/home" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/forecast" className="hover:text-gray-300">
              Forecast
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl focus:outline-none ml-auto"
            title="Toggle Menu" 
          >
            {menuOpen ? "❌" : "☰"}
          </button>

          {/* Toggle Icon for Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 text-2xl focus:outline-none"
            title="Toggle Dark Mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </nav>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`md:hidden ${
          menuOpen ? "block" : "hidden"
        } bg-blue-600 text-white w-full`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link
            to="/"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Welcome
          </Link>
          <Link
            to="/home"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/forecast"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Forecast
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
