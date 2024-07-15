import React from "react";
import editor from "./imageeditor.png";

function ImageEditor() {
    return (
      <div>
  
      <div className="project">
          
          <div className="image">
          <img src={editor}></img>
          </div>
          <div className="description">
        <h3>Image Editor</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <a href="https://zainy66.github.io/image_editor/"><button className="demobtn">Live Demo</button></a>
        
        </div>
      </div>
      </div>
    );
  }
  
  export default ImageEditor;