import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
        Welcome to our Weather Dashboard! This platform provides real-time
        weather information for any city around the world. You can search for
        weather details, including temperature, humidity, and wind speed. We aim
        to deliver accurate and timely weather data with an easy-to-use
        interface.
      </p>
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
        onClick={() => (window.location.href = "/home")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default AboutPage;
