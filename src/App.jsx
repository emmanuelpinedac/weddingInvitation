import { useState } from "react";
import "./App.css";
import Welcome from "./welcome";
import Countdown from "./countdown";
import Card from "./Locations";
import Links from "./Links";
import Gifts from "./Gifts";
import Form from "./Form";

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
      <img
        className="ornament-img"
        src="src/assets/ornament-image.svg"
        alt="ornament-img"
      />
      <Gifts />
      <img
        className="ornament-img"
        src="src/assets/ornament-image.svg"
        alt="ornament-img"
      />
      <Form />
      <img src="src/assets/welcome-img.png" alt="flowers - welcome" />
    </div>
  );
}

export default App;
