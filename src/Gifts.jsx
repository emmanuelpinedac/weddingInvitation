import React from "react";
import "./Gifts.css";

function Gifts() {
  return (
    <div id="Gifts" className="Gifts-Container">
      <div className="Gifts-Text-Container">
        <h2>
          El mejor regalo que nos pueden hacer, es compartir este día con
          nosotros.
        </h2>
        <img
          className="Flower-gifts"
          src="src/assets/flower3-image.png"
          alt="flores-regalos"
        />
        <h3>
          Si desean darnos algún otro presente, lo pueden hacer en efectivo en
          un baúl que tendremos en la recepción.
        </h3>
        <h3>
          O bien pueden utilizar Sinpe Móvil con los siguientes datos si les
          queda más cómodo:
        </h3>
        <div className="sinpe-info">
          <p>
            <i class="fa-regular fa-user"></i> Dayan Pérez Solera
          </p>
          <p>
            <i class="fa-solid fa-mobile-screen"></i> 8736-9951
          </p>
        </div>
      </div>
    </div>
  );
}
export default Gifts;
