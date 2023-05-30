import { useState } from "react";
import "./App.css";
import Welcome from "./welcome";
import Countdown from "./countdown";
import Card from "./card";

function App() {
  return (
    <div className="App-Container">
      <Welcome />
      <Countdown />
      <Card />
    </div>
  );
}

export default App;
2