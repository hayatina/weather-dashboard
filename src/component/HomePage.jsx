import { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";


const HomePage = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  const API_KEY = "92d49189cb2b878e0610a8be7afa97da"; // Replace with your key

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(saved);
  }, []);

  // Save updated recent searches to localStorage
  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  // Auto-fetch weather based on user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          setLoading(true);
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          );
          setWeather(response.data);
          setCity(response.data.name);
        } catch (err) {
          setError("Could not fetch weather from location.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied.");
      }
    );
  }, []);

  // Search weather by city
  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);

      // Update recent searches
      setRecentSearches((prev) => {
        const updated = [city, ...prev.filter((c) => c !== city)];
        return updated.slice(0, 5); // Keep only latest 5
      });
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
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
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Feedback */}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading && <p className="text-blue-500 mb-4">Loading...</p>}

      {/* Weather Display */}
      {weather && !loading && <WeatherDisplay weather={weather} />}

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="mt-6 bg-white p-4 rounded-md shadow w-full max-w-md">
          <h3 className="font-semibold mb-2 text-lg">Recent Searches</h3>
          <ul className="list-disc list-inside text-gray-700">
            {recentSearches.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-blue-600"
                onClick={() => {
                  setCity(item);
                  fetchWeather();
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
