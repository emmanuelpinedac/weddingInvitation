import React from "react";
import { Formik } from "formik";
import "./Form.css";
import axios from "axios";

function Form() {
  const onSubmit = async (values) => {
    const data = await axios.post(
      "https://us-central1-weddinginvitation-727ad.cloudfunctions.net/app/api/confirmaciones",
      values
    );
    alert("Formulario enviado");
  };

  return (
    <div id="Form" className="Form-Container">
      <h1 className="form-title">¿Nos acompañarás en nuestra boda?</h1>
      <Formik
        initialValues={{
          name: "",
          attendance: false,
          age: false,
          message: "",
          entrancedish: "",
          maindish: "",
        }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="wedding-form" onSubmit={handleSubmit}>
            <label>
              <div className="label-container">
                <div className="each-label">
                  <input
                    name="attendance"
                    type="radio"
                    value={true}
                    onChange={handleChange}
                  />
                  <p>Asistiré</p>
                </div>
                <div className="each-label">
                  <input
                    name="attendance"
                    type="radio"
                    value={false}
                    onChange={handleChange}
                  />
                  <p>No podré asistir</p>
                </div>
              </div>
            </label>

            <label className="name-label">
              <strong>
                <p>Ingrese su nombre completo:</p>
              </strong>
              <br />
              <input
                className="input-name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
              />
            </label>

            <label className="age-label">
              <strong>
                <p>Favor indique si es un adulto o un niño:</p>
              </strong>
              <div className="label-container">
                <div className="each-label">
                  <input
                    name="age"
                    type="radio"
                    value={true}
                    onChange={handleChange}
                  />
                  <p>Adulto</p>
                </div>
                <div className="each-label">
                  <input
                    name="age"
                    type="radio"
                    value={false}
                    onChange={handleChange}
                  />
                  <p>Niño</p>
                </div>
              </div>
            </label>

            <div className="menu-form">
              <h3 className="menu-title">Seleccion del Menú</h3>

              <div className="menu-labels">
                <label className="entrance-label">
                  <strong className="menu-subtitle">
                    <p>Seleccione su plato de entrada:</p>
                  </strong>
                  <br />
                  <input
                    name="entrancedish"
                    type="radio"
                    value={"Crema de ayote"}
                    onChange={handleChange}
                  />
                  Crema de ayote
                  <br />
                  <br />
                  <input
                    name="entrancedish"
                    type="radio"
                    value={"Ensalada Hortensias"}
                    onChange={handleChange}
                  />
                  Ensalada Hortensias: Lechuga, tomate, pepino, zanahoria,
                  crutones, semillas mixtas con aderezo de maracuyá y eneldo
                </label>
              </div>

              <div className="menu-labels">
                <label>
                  <strong className="menu-subtitle">
                    <p>Seleccione su plato fuerte:</p>
                  </strong>
                  <br />
                  <input
                    name="maindish"
                    type="radio"
                    value={"Costilla de cerdo "}
                    onChange={handleChange}
                  />
                  Costilla de cerdo en salsa BBQ de tamarindo
                  <br />
                  <br />
                  <input
                    name="maindish"
                    type="radio"
                    value={"Pollo relleno"}
                    onChange={handleChange}
                  />
                  Pollo relleno de queso gouda y panceta
                  <br />
                  <br />
                  <input
                    name="maindish"
                    type="radio"
                    value={"Salmón al eneldo "}
                    onChange={handleChange}
                  />
                  Salmón al eneldo
                </label>
              </div>
            </div>

            <label className="text-box">
              <h3>Déjanos un mensaje especial:</h3>
              <textarea
                className="message-box"
                name="message"
                type="text"
                rows={5}
                value={values.message}
                onChange={handleChange}
              />
            </label>

            <button
              className="form-button"
              type="submit"
              disabled={isSubmitting}
            >
              <h4>Enviar</h4>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
export default Form;
