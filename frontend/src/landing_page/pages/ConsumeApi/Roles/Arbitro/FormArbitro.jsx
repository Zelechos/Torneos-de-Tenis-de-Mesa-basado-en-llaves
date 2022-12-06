import JuezImg from "./juez.jpg";
import { useState } from "react";
import ModalAlert from "../../Modal";

function FormArbitro() {
  const [show, setShow] = useState(false);
  const [mensaje, setMensaje] = useState("Todos los campos deben ser llenados");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [referee, setReferee] = useState({
    apellido: "",
    email: "",
    experiencia_anos: 0,
    fecha_nacimiento: "",
    nombre: "",
    telefono: 0,
  });

  const handleChange = (e) => {
    setReferee({
      ...referee,
      [e.target.name]: e.target.value,
    });
  };

  // POST
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar datos
    if (
      !(
        referee.nombre === "" ||
        referee.apellido === "" ||
        referee.fecha_nacimiento === "" ||
        referee.email === ""
      )
    ) {
      // consulta
      const requestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(referee),
      };

      fetch(
        "https://spring-370801.wn.r.appspot.com/api/arbitro/add",
        requestInit
      )
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setReferee(respuesta));

      // reiniciando state del jugador
      setReferee({
        apellido: "",
        email: "",
        experiencia_anos: 0,
        fecha_nacimiento: "",
        nombre: "",
        telefono: 0,
      });
      setMensaje("Se registro el Arbitro");
      handleShow();
    }
  };

  return (
    <>
      <form className="main" onSubmit={handleSubmit}>
        <div className="container-img">
          <img className="juez-img" src={JuezImg} alt="" />
        </div>
        <div className="data-arbitro">
          <h1 className="heading">Registro Arbitro</h1>
          <div className="input">
            <label htmlFor="nombre">Nombres: </label>
            <input
              onChange={handleChange}
              type="text"
              name="nombre"
              value={referee.nombre}
            />
          </div>
          <div className="input">
            <label htmlFor="apellido">Apellidos: </label>
            <input
              onChange={handleChange}
              type="text"
              name="apellido"
              value={referee.apellido}
            />
          </div>
          <div className="input fecha">
            <div className="label-fecha">
              <label htmlFor="fecha_nacimiento">Fecha Nacimiento:</label>
              <input
                onChange={handleChange}
                type="date"
                name="fecha_nacimiento"
                value={referee.fecha_nacimiento}
                min="1970-01-01"
                max="1997-12-31"
              />
            </div>
            <div>
              <label htmlFor="experiencia_anos">Experiencia en años: </label>
              <input
                onChange={handleChange}
                type="number"
                name="experiencia_anos"
                value={referee.experiencia_anos}
                min="1"
                max="50"
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor="email">Email: </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={referee.email}
            />
          </div>
          <div className="input">
            <label htmlFor="telefono">Telefono: </label>
            <input
              onChange={handleChange}
              type="number"
              name="telefono"
              value={referee.telefono}
              min="59999999"
              max="79999999"
            />
          </div>
          <button className="btn-register" type="submit" onClick={handleShow}>
            Registrar Arbitro
          </button>
        </div>
      </form>
      <ModalAlert show={show} handleClose={handleClose} mensaje={mensaje} />
    </>
  );
}

export default FormArbitro;
