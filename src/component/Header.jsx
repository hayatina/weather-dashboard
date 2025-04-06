import { Link } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="shadow-md bg-blue-600 text-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">🌤️ WeatherApp</Link>
        </div>

        {/* Navigation + Toggle */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Welcome
          </Link>
          <Link to="/home" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/forecast" className="hover:text-gray-300">
            forecast
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>

          {/* Toggle Icon */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 text-2xl focus:outline-none"
            title="Toggle Dark Mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
