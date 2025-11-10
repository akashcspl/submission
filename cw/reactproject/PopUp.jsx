import React from "react";
import "./App.css";
 
 const Popup = (props) => {
  return (
    <div className="popUpOverlay">
      <div className="popUpContent">
        <h3>{props.title}</h3>
        <p>This is a PopUp.</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};
 
export default Popup;

 
 
