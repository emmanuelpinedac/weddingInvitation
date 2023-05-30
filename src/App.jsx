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
          <div className="welcomeMessage">
            <p>
              Estamos muy Complacidos de invitarte a nuestra boda, y queremos
              que seas parte del inicio de nuestra historia.
            </p>
          </div>
          <h1 className="names">Dayan & Vinicio</h1>
          <h2 className="fechaBoda">
            ¡Nos casamos el 30 de Septiembre del 2023!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
