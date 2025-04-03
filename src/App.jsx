import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "your_api_key_here"; // Replace with your actual API key
const CITY = "London"; // Change this to test different cities

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (err) {
        setError("Failed to fetch weather data");
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Weather Data</h1>
      {error && <p className="text-red-500">{error}</p>}
      {weather ? (
        <div className="mt-4">
          <p>City: {weather.name}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} km/h</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default App;
