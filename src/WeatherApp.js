import React from "react";
import weather from "./weatherapp.png";

function WeatherApp() {
  return (
    <div>

    <div className="project">
        
        <div className="image">
        <img src={weather}></img>
        </div>
        <div className="description">
      <h3>Weather App</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      <a href="https://zainy66.github.io/PRODIGY_WD_05/"><button className="demobtn">Live Demo</button></a>
      
      </div>
    </div>
    </div>
  );
}

export default WeatherApp;