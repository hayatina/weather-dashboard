import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [city, setCity] = useState(""); // For storing city input
  const [currentWeather, setCurrentWeather] = useState(null); // For storing current weather
  const [error, setError] = useState(""); // For error messages
  const [loading, setLoading] = useState(false); // For loading state
  const [isSearchedCity, setIsSearchedCity] = useState(false); // Flag to track if the weather is for searched city

  const navigate = useNavigate(); // Navigation hook
  const API_KEY = "92d49189cb2b878e0610a8be7afa97da"; // Your OpenWeather API Key

  // Fetch current weather for user's location
  useEffect(() => {
    // Try to get the user's current location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLoading(true);

        try {
          // Fetch current weather based on the geolocation
          const currentWeatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          );
          setCurrentWeather(currentWeatherResponse.data);
          setIsSearchedCity(false); // Set the flag to false as this is current location weather
        } catch (err) {
          setError("Could not fetch weather for your location.");
          setCurrentWeather(null);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied.");
        setLoading(false);
      }
    );
  }, []); // This runs once on component mount

  // Fetch weather for a searched city
  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) {
      setError("Please enter a city name.");
      return;
    }
    setError(""); // Reset error
    setLoading(true); // Show loading

    try {
      // Fetch current weather based on city name
      const currentWeatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      setCurrentWeather(currentWeatherResponse.data);
      setIsSearchedCity(true); // Set the flag to true as this is a searched city
    } catch (err) {
      setError("City not found. Please try again.");
      setCurrentWeather(null);
    } finally {
      setLoading(false); // Hide loading
    }
  };

  // Handle search input and fetch weather for city
  const handleSearch = () => {
    fetchWeather(city);
  };

  // Navigate to forecast page when button is clicked
  const handleForecastRedirect = () => {
    navigate(`/forecast/${city}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Weather Dashboard</h1>

      {/* Search Input */}
      <div className="w-full max-w-md flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading && <p className="text-blue-500 mb-4">Loading...</p>}

      {/* Display Current Weather */}
      {currentWeather && !loading && (
        <div className="bg-white p-6 rounded-lg shadow-md text-center w-full max-w-md">
          <h2 className="text-xl font-semibold">
            {currentWeather.name}, {currentWeather.sys.country}
          </h2>
          <p className="text-gray-600 capitalize">
            {currentWeather.weather[0].description}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            className="mx-auto"
          />
          <p className="text-lg font-bold">{currentWeather.main.temp}°C</p>
          <p>Humidity: {currentWeather.main.humidity}%</p>
          <p>Wind Speed: {currentWeather.wind.speed} m/s</p>

          {/* Button to redirect to ForecastPage (only for searched city) */}
          {isSearchedCity && (
            <div className="mt-4">
              <button
                onClick={handleForecastRedirect}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                View 5-Day Forecast
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
