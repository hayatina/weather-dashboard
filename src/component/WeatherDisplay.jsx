const WeatherDisplay = ({ weather }) => {
  return (
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
  );
};

export default WeatherDisplay;
