import "../stylesForm.css";
import TorneoImg from "./trofeo.jpg";
import ModalAlert from "../Modal";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

function FormTournament() {
  const [show, setShow] = useState(false);
  const [mensaje, setMensaje] = useState("Todos los campos deben ser llenados");
  const [modalidades, setModalidad] = useState([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const fechaHoy = new Date();

  const [torneo, setTorneo] = useState({
    nombre: "",
    descripcion: "",
    fecha_inicio: "",
    fecha_final: "",
    lugar: "",
    sede: "",
    categoria_id: 0,
  });

  const handleChange = (e) => {
    setTorneo({
      ...torneo,
      [e.target.name]: e.target.value,
    });
  };

  // POST
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar datos
    if (
      !(
        torneo.nombre === "" ||
        torneo.descripcion === "" ||
        torneo.fecha_inicio === "" ||
        torneo.fecha_final === "" ||
        torneo.sede === "" ||
        torneo.lugar === ""
      )
    ) {
      // consulta
      const requestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(torneo),
      };

      fetch(
        "https://spring-370801.wn.r.appspot.com/api/torneo/add",
        requestInit
      )
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setTorneo(respuesta));

      // reiniciando state del jugador
      setTorneo({
        nombre: "",
        descripcion: "",
        fecha_inicio: "",
        fecha_final: "",
        lugar: "",
        sede: "",
        categoria_id: 0,
      });
      setMensaje("Se registro el Torneo");
      handleShow();
    }
  };

  // GET Modalidad
  useEffect(() => {
    const getCategorias = () => {
      fetch("https://spring-370801.wn.r.appspot.com/api/torneo/mostrar")
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setModalidad(respuesta));
    };
    getCategorias();
  }, []);

  return (
    <>
      <form className="main" onSubmit={handleSubmit}>
        <div className="container-img">
          <img className="torneo-img" src={TorneoImg} alt="" />
        </div>
        <div className="data-torneo">
          <h1 className="heading">Registrar Nuevo Torneo Ahora</h1>
          <div className="input">
            <label htmlFor="nombre">Nombre de tú Torneo: </label>
            <input
              onChange={handleChange}
              type="text"
              name="nombre"
              value={torneo.nombre}
            />
          </div>
          <div className="input">
            <label htmlFor="descripcion">Descripción Corta: </label>
            <input
              onChange={handleChange}
              type="text"
              name="descripcion"
              value={torneo.descripcion}
            />
          </div>
          <div className="input two-option">
            <div className="label-fecha">
              <label htmlFor="fecha_inicio">Fecha Inicio:</label>
              <input
                onChange={handleChange}
                type="date"
                name="fecha_inicio"
                value={torneo.fecha_inicio}
                min={
                  fechaHoy.getFullYear() +
                  `-` +
                  (fechaHoy.getMonth() + 1) +
                  `-` +
                  (fechaHoy.getDate() > 9
                    ? fechaHoy.getDate()
                    : `0` + fechaHoy.getDate())
                }
              />
            </div>
            <div className="label-fecha">
              <label htmlFor="fecha_final">Fecha Conclusión</label>
              <input
                onChange={handleChange}
                type="date"
                name="fecha_final"
                value={torneo.fecha_final}
                min={
                  fechaHoy.getFullYear() +
                  `-` +
                  (fechaHoy.getMonth() + 1) +
                  `-` +
                  (fechaHoy.getDate() > 9
                    ? fechaHoy.getDate()
                    : `0` + fechaHoy.getDate())
                }
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor="lugar">Lugar: </label>
            <input
              onChange={handleChange}
              type="text"
              name="lugar"
              value={torneo.lugar}
            />
          </div>
          <div className="input">
            <label htmlFor="sede">Sede: </label>
            <input
              onChange={handleChange}
              type="text"
              name="sede"
              value={torneo.sede}
            />
          </div>
          <div className="input">
            <label htmlFor="categoria">Modalidad: </label>
            <Form.Select
              aria-label="Default select example"
              className="select"
              onChange={handleChange}
              name="categoria_id"
              value={torneo.modalidad_id}
            >
              {modalidades.map((modalidad) => (
                <option key={modalidad.id.toString()} value={modalidad.id}>
                  {modalidad.nombre}
                </option>
              ))}
            </Form.Select>
          </div>
          <button className="btn-register" type="submit" onClick={handleShow}>
            Registrar Torneo
          </button>
        </div>
      </form>
      <ModalAlert show={show} handleClose={handleClose} mensaje={mensaje} />
    </>
  );
}

export default FormTournament;
