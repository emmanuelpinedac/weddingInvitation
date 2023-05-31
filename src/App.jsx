import { useState } from "react";
import "./App.css";
import Welcome from "./welcome";
import Countdown from "./countdown";
import Card from "./card";
import Links from "./Links";

function App() {
  return (
    <div className="App-Container">
      <Welcome />
      <img
        className="ornament-img"
        src="src/assets/ornament-image.svg"
        alt="ornament-img"
      />
      <Countdown />
      <Links />
      <img
        className="ornament-img"
        src="src/assets/ornament-image.svg"
        alt="ornament-img"
      />
      <Card />
      <img src="src/assets/welcome-img.png" alt="flowers - welcome" />
    </div>
  );
}

export default App;
