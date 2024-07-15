import React from "react";
import voice from "./voicetext.png";

function VoiceText() {
    return (
      <div>
  
      <div className="project">
          
          <div className="image">
          <img src={voice}></img>
          </div>
          <div className="description">
        <h3>Voice To Text</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <a href="https://zainy66.github.io/speech/"><button className="demobtn">Live Demo</button></a>
        
        </div>
      </div>
      </div>
    );
  }
  
  export default VoiceText;