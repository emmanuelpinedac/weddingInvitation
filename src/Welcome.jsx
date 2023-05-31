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
      <div className="welcomeMessage">
        <p>
          Estamos muy Complacidos de invitarte a nuestra boda, queremos que
          seas parte del inicio de nuestra historia.
        </p>
      </div>
      <h1 className="names">Dayan & Vinicio</h1>
      <h2 className="wedding-announcement">
        ¡Nos vamos a casar!
      </h2>
    </div>
  </div>
  );
}

export default Welcome;