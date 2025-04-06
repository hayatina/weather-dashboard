🌤️ Weather Dashboard
A responsive and feature-rich Weather Dashboard built with React, Tailwind CSS, and the OpenWeatherMap API. The app allows users to search for any city's weather, view real-time data for their current location, and enjoy additional features like recent searches, dark mode, and auto-updating weather conditions.

🚀 Features
🌍 Geolocation Support – Automatically detects and displays weather for your current location.

🔎 Search Functionality – Search any city to view real-time weather information.

🌡️ Weather Data Display – View temperature, humidity, wind speed, and weather icons.

♻️ Real-Time Updates – Automatic weather updates every few minutes + manual refresh.

🌘 Dark Mode – Toggle between light and dark themes.

📁 Recent Searches – Stores recent cities using local storage.

🌐 Internationalization (Stretch goal) – Supports multiple languages.

📱 Responsive Design – Optimized for all screen sizes using Tailwind CSS.

⚠️ Error Handling – Handles invalid city names and network issues with user-friendly messages.

🛠️ Tech Stack
Frontend: React, JSX, Tailwind CSS

API: OpenWeatherMap API

HTTP Client: Axios

Deployment: Netlify / Vercel

📁 Project Structure

src/
│
├── components/
│   ├── Header.jsx         # Navigation header
│   ├── Footer.jsx         # Footer with credits
|   ├── WelcomePage.jsx    # Intro page with project description
|   ├── HomePage.jsx       # Main dashboard for current/search weather
│   ├── ForecastPage.jsx   # Displays weather data of five days

│
├── pages/
│   ├── AboutPage.jsx      # description about the web
│   ├── ContactPage.jsx    # To take review and feedback
│
├── App.jsx                # Main app component with routing
├── index.css              # Tailwind CSS styles
└── main.jsx               # React app entry point

🔧 Installation & Setup

Clone the repository using git clone https://github.com/hayatina/Last-alx-project.git.

  - Navigate to the project folder with cd Last-alx-project.

  - Install the dependencies by running npm install.

  - add your OpenWeatherMap API key like this:- const API_KEY = "92d49189cb2b878e0610a8be7afa97da"; 

Start the development server with npm run dev.

The app will run locally in your browser, usually at http://localhost:5173.

    🧠 Future Improvements

⛅ 7-day weather forecast view

🗺️ Interactive weather map

🧪 Unit & integration testing

🌍 Multi-language support


🛠️ Built With
- React

- Tailwind CSS

- Axios

- OpenWeatherMap API

- Vite

📜 License
This project is licensed under the MIT License.