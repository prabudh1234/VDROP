// navigation.js (optional React Router setup)
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RideOptionsScreen from "./screens/RideOptionsScreen";
import DriverArrivalScreen from "./screens/DriverArrivalScreen";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/splash" />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/rides" element={<RideOptionsScreen />} />
        <Route path="/arrival" element={<DriverArrivalScreen />} />
      </Routes>
    </Router>
  );
};

export default Navigation;

// Tailwind CSS setup: (add in tailwind.config.js)
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {}
//   },
//   plugins: []
// }

// Include Tailwind CSS in your index.css or App.css:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// Place logo or image assets in: VDropApp/assets/
// Example usage:
// <img src="./assets/logo.png" alt="V-DROP logo" />

// App.js can use either state-based or router-based navigation.
// You may replace state-based with <Navigation /> component above if desired.
