import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleStart = () => {
    navigate("/home"); // Navigate to HomePage when the button is clicked
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to Weather Dashboard
      </h1>
      <p className="text-lg mb-6 text-center">
        Get real-time weather information for any city. Easily check the current
        temperature, <br /> humidity, wind speed, and more, all at your fingertips.
        Search for any location, <br /> or let us detect your location automatically!
      </p>
      <button
        onClick={handleStart}
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
      >
        Get Started
      </button>
    </div>
  );
};

export default WelcomePage;
