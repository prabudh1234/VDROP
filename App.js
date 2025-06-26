// App.js
import React, { useState } from "react";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RideOptionsScreen from "./screens/RideOptionsScreen";
import DriverArrivalScreen from "./screens/DriverArrivalScreen";

const App = () => {
  const [step, setStep] = useState(0);
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicle, setVehicle] = useState("");

  const handleBook = () => {
    if (location && destination && vehicle) setStep(4);
  };

  const renderScreen = () => {
    switch (step) {
      case 0:
        return <SplashScreen onStart={() => setStep(1)} />;
      case 1:
        return <LoginScreen onLogin={() => setStep(2)} />;
      case 2:
        return (
          <HomeScreen
            location={location}
            setLocation={setLocation}
            destination={destination}
            setDestination={setDestination}
            onNext={() => setStep(3)}
          />
        );
      case 3:
        return (
          <RideOptionsScreen
            setVehicle={setVehicle}
            onBook={handleBook}
          />
        );
      case 4:
        return <DriverArrivalScreen />;
      default:
        return null;
    }
  };

  return <div className="font-sans">{renderScreen()}</div>;
};

export default App;
