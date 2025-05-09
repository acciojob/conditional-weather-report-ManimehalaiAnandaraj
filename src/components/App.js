import React from "react";
import './../styles/App.css';

function App() {

  const WeatherDisplay = {
    temperature: 25,
    conditions: "Sunny"
  };

  
  const temperatureColor =  WeatherDisplay.temperature > 20 ? 'red' : 'blue'
  

  return (
    <div>
      <p>Temperature: <span style={{color:temperatureColor}}>{WeatherDisplay.temperature}</span></p>
      <p>Conditions: {WeatherDisplay.conditions}</p>
    </div>
  )
}

export default App;  