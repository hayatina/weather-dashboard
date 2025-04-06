import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ForecastPage = () => {
  const { city } = useParams(); // Get the city from the URL params
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_KEY = "92d49189cb2b878e0610a8be7afa97da"; // Replace with your OpenWeather API key

  // Fetch forecast data for the next 5 days
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );
        setForecastData(response.data);
      } catch (err) {
        setError("Error fetching forecast data.");
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]); // Run effect when the city changes

  if (loading) return <p className="text-center">Loading forecast...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-blue-100">
      <h1 className="text-3xl font-bold mb-6 text-center">
        5-Day Forecast for {city}
      </h1>

      {/* Forecast Grid */}
      <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {forecastData?.list.slice(0, 5).map((forecast, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold">
              {new Date(forecast.dt * 1000).toLocaleDateString()}{" "}
              {/* Convert Unix timestamp to Date */}
            </h2>
            <p className="text-gray-600 capitalize">
              {forecast.weather[0].description}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="mx-auto"
            />
            <p className="text-lg font-bold">{forecast.main.temp}°C</p>{" "}
            {/* Temperature */}
            <p>Humidity: {forecast.main.humidity}%</p>
            <p>Wind Speed: {forecast.wind.speed} m/s</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastPage;
