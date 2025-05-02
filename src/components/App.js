import React from "react";
import './../styles/App.css';

const App = () => {

  const weatherData = {
    temperature: 25,
    conditions: "Sunny"
  };

  // Define styles based on temperature
  const tempStyle = {
    color: weatherData.temperature > 20 ? 'red' : 'blue'
  };

  // You can also define styles for conditions if needed
  const conditionStyle = {
    color: weatherData.conditions === "Sunny" ? 'orange' : 'gray'
  };

  return (
    <div>
      <p>Temperature: <span style={tempStyle}>{weatherData.temperature}°C</span></p>
      <p>Conditions: <span style={conditionStyle}>{weatherData.conditions}</span></p>
    </div>
  )
}

export default App;