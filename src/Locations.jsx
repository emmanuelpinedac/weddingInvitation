import React from "react";
import "./Locations.css";

function Locations() {
  return (
    <div id="locations" className="cards-container">
      <div className="card-mass">
        <h1>Ceremonia</h1>

        <p>Sábado 30 de Septiembre</p>
        <p>A las 2 de la tarde</p>
        <h2>Parroquia de la Candelaria</h2>
        <p>San Carlos, Venecia Centro</p>
        <div className="cards-location">
          <a href="####">
            <i class="fa-solid fa-location-arrow"></i>
          </a>
          <a href="###">
            <p>Direccion</p>
          </a>
        </div>
      </div>

      <img
        className="flower-image"
        src="src/assets/flower2-image.png"
        alt="flores"
      />

      <div className="card-reception">
        <h1>Recepción</h1>
        <p>Sábado 30 de Septiembre</p>
        <p>A las 5 de la tarde</p>
        <h2>Salon de Eventos Vista Verde</h2>
        <p>San Carlos, Ciudad quesada</p>
        <div className="cards-location">
          <a href="####">
            <i class="fa-solid fa-location-arrow"></i>
          </a>
          <a href="###">
            <p>Direccion</p>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Locations;
