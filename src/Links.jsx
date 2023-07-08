import React from "react";
import "./links.css";

function Links() {
  return (
    <div className="links-title-container">
      <h1>¿Nos Acompañas?</h1>
      <ul className="links-container">
        <li className="link">
          <a href="#locations">
            <i className="fa-solid fa-location-dot"></i>
          </a>
          <a href="#locations">
            <p>Ubicacion</p>
          </a>
        </li>
        <li className="link">
          <a href="#Gifts">
            <i className="fa-solid fa-gift"></i>
          </a>
          <a href="#Gifts">
            <p>Obsequios</p>
          </a>
        </li>
        <li className="link">
          <a href="#Form">
            <i className="fa-regular fa-square-check"></i>
          </a>
          <a href="#Form">
            <p>Asistencia</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Links;
