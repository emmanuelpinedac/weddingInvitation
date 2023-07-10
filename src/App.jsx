import { useState } from "react";
import "./App.css";
import Welcome from "./Welcome";
import Countdown from "./Countdown";
import Card from "./Locations";
import Links from "./Links";
import Gifts from "./Gifts";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="App-Container">
      <Welcome />
      <img
        className="ornament-img"
        src="/assets/ornament-image.svg"
        alt="ornament-img"
      />
      <Countdown />
      <Links />
      <img
        className="ornament-img"
        src="/assets/ornament-image.svg"
        alt="ornament-img"
      />
      <Card />
      <img
        className="ornament-img"
        src="/assets/ornament-image.svg"
        alt="ornament-img"
      />
      <Gifts />
      <img
        className="ornament-img"
        src="/assets/ornament-image.svg"
        alt="ornament-img"
      />
      <Form />
      <img
        className="End-Flower"
        src="/assets/welcome-img.png"
        alt="flowers - welcome"
      />

      <Footer />

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
