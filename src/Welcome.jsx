import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="Welcome-Container">
      <img
        className="welcomeImg"
        src="src/assets/welcome-img.png"
        alt="flowers-img"
      />
      <div className="welcomeMessageContainer">
        <h1 className="names">Dayan & Vinicio</h1>
        <h2 className="wedding-announcement">¡Nos Casamos!</h2>

        <p className="welcomeMessage">
          Y estamos muy complacidos de invitarte a celebrarlo con nosotros.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
