import React from "react";
import "./Locations.css";

function Locations() {
  return (
    <div id="locations" className="cards-container">
      <div className="card-mass">
        <h1>Ceremonia</h1>
        <p>Sábado 2 de Septiembre</p>
        <p>A las 10:00 am</p>
        <h2>Catedral San Carlos Borromeo</h2>
        <p>Ciudad Quesada, San Carlos</p>
        <a
          className="card-location-button"
          href="https://waze.com/ul/hd1gfwxrcu"
        >
          <i className="fa-solid fa-location-arrow"></i> Direccion
        </a>
      </div>

      <img  
        className="flower-image"
        src="src/assets/flower2-image.png"
        alt="flores"
      />

      <div className="card-reception">
        <h1>Recepción</h1>
        <p>Sábado 2 de Septiembre</p>
        <p>A las 11:30 am</p>
        <h2>Restaurante las Hortensias</h2>
        <p>San Vicente, Ciudad quesada</p>

        <a
          className="card-location-button"
          href="https://waze.com/ul/hd1gfwfzzy"
        >
          <i className="fa-solid fa-location-arrow"></i> Direccion
        </a>
      </div>
    </div>
  );
}
export default Locations;
