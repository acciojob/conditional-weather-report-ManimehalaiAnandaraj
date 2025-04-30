
import React from "react";
import './../styles/App.css';

const App = () => {

  const weatherData = {
    temperature : 25,
    conditions : "Sunny"
  };

  const textStyle = {
    color : weatherData.temperature  > 20 ? 'red' : 'blue'
  };

  const conditionStyle = {
    color: weatherData.conditions === "Sunny" ? 'orange' : 'gray'
  };

  return (
    <div>
       <p>Temperature: <span style={textStyle}>{weatherData.temperature}</span></p>
       <p>Conditions: <span style={conditionStyle}>{weatherData.conditions}</span></p>
    </div>
  )
}

export default App
