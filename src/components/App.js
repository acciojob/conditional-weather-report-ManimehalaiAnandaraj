import React from "react";
import './../styles/App.css';

const App = () => {

  const WeatherDisplay = {
    temperature: 25,
    conditions: "Sunny"
  };

  
  const tempStyle = {
    color: WeatherDisplay.temperature > 20 ? 'red' : 'blue'
  };

 
  const conditionStyle = {
    color: WeatherDisplay.conditions === "Sunny" ? 'orange' : 'gray'
  };

  return (
    <div>
      <p>Temperature: <span style={tempStyle}>{WeatherDisplay.temperature}</span></p>
      <p>Conditions: <span style={conditionStyle}>{WeatherDisplay.conditions}</span></p>
    </div>
  )
}

export default App;  