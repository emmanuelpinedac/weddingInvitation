import { useState } from "react";
import "./App.css";
import Welcome from "./welcome";
import Countdown from "./countdown";
import Card from "./card";

function App() {
  return (
    <div className="App-Container">
      <Welcome />
      <img className="ornament-img" src="src/assets/ornament-image.svg" alt="ornament-img" />
      <Countdown />
      <Card />
    </div>
  );
}

export default App;
