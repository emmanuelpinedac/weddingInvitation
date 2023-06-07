import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Calcula la fecha objetivo (reemplaza con tu fecha deseada)
    const countdownDate = new Date("2023-09-02").getTime();

    // Actualiza el tiempo restante cada segundo
    const countdownInterval = setInterval(() => {
      // Obtiene la fecha y hora actual
      const now = new Date().getTime();

      // Calcula el tiempo restante en milisegundos
      const remainingTime = countdownDate - now;

      // Calcula los días, horas, minutos y segundos restantes
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      // Actualiza el estado con el tiempo restante
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      // Si la cuenta regresiva ha finalizado, detén el intervalo
      if (remainingTime < 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="Countdown-Container">
      <p className="Countdown-Date">Sábado 02 de Septiembre del 2023</p>
      <br />
      <div className="Countdown-item-Container">
        <div className="Countdown-item">
          {" "}
          <p>{days}</p> <p>Días</p>
        </div>
        <div className="Countdown-item">
          {" "}
          <p>{hours}</p> <p>Horas</p>
        </div>
        <div className="Countdown-item">
          {" "}
          <p>{minutes}</p> <p>Minutos</p>
        </div>
        <div className="Countdown-item">
          {" "}
          <p>{seconds}</p> <p>Segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
