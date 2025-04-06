import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const WeatherDisplay = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_KEY = "92d49189cb2b878e0610a8be7afa97da";

  // List of random cities to pick from
  const randomCities = [
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Sydney",
    "Berlin",
    "Rome",
    "Cape Town",
    "Toronto",
    "Dubai",
  ];

  // Function to get a random city from the list
  const getRandomCity = () => {
    const randomIndex = Math.floor(Math.random() * randomCities.length);
    return randomCities[randomIndex];
  };

  // Fetch weather data based on the city (either the city from URL or a random city)
  useEffect(() => {
    const fetchWeather = async () => {
      const cityToFetch = city || getRandomCity(); // Use the city from URL or random city

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityToFetch}&units=metric&appid=${API_KEY}`
        );
        setWeather(response.data);
      } catch (err) {
        setError("City not found or network error.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-full max-w-md">
        <h2 className="text-xl font-semibold">
          {weather.name}, {weather.sys.country}
        </h2>
        <p className="text-gray-600 capitalize">
          {weather.weather[0].description}
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="mx-auto"
        />
        <p className="text-lg font-bold">{weather.main.temp}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
