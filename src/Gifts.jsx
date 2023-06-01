import React from "react";
import "./Gifts.css";

function Gifts() {
  return (
    <div id="Gifts" className="Gifts-Container">
      <div className="Gifts-Text-Container">
        <h2>
          El mejor regalo que nos pueden hacer, es compartir este día con
          nosotros
        </h2>
        <h3>
          Si desean darnos algún otro presente, lo pueden hacer en efectivo en
          un baúl que tendremos en la recepción.
        </h3>
      </div>
      <img
        className="Flower-gifts"
        src="src/assets/flower3-image.png"
        alt="flores-regalos"
      />
    </div>
  );
}
export default Gifts;
