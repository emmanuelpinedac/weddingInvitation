import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <div className="welcomeContainer">
        <img
          className="welcomeImg"
          src="src/assets/welcome-img.png"
          alt="flowers-img"
        />
        <div className="welcomeMessageContainer">
          <p className="welcomeMessage1">
            Estamos muy Complacidos de invitarte a nuestra boda
          </p>
          <p className="welcomeMessage2">
            Queremos que seas parte del inicio de nuestra historia
          </p>
          <h1 className="names">Dayan & vinicio</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
