import Form from "react-bootstrap/Form";
import { useState } from "react";
import ModalAlert from "../../Modal";
import JugadorImg from "./img-jugador.jpg";

function FormJugador() {
  const [show, setShow] = useState(false);
  const [mensaje, setMensaje] = useState("Todos los campos deben ser llenados");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [player, setPlayer] = useState({
    altura: 0,
    apellidos: "",
    fecha_nacimiento: "",
    mano_habil: "",
    nacionalidad: "",
    peso: 0,
    sexo: "",
    nombre: "",
    ranking: 0,
  });

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  // POST
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar datos
    if (
      !(
        player.nombre === "" ||
        player.apellidos === "" ||
        player.nacionalidad === "" ||
        player.sexo === "" ||
        player.mano_habil === ""
      )
    ) {
      // consulta
      const requestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      };

      fetch(
        "https://spring-370801.wn.r.appspot.com/api/jugador/add",
        requestInit
      )
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setPlayer(respuesta));

      // reiniciando state del jugador
      setPlayer({
        altura: 0,
        apellidos: "",
        fecha_nacimiento: "",
        mano_habil: "",
        nacionalidad: "",
        peso: 0.0,
        sexo: "",
        nombre: "",
        ranking: 0,
      });
      setMensaje("Se registro el Jugador");
      handleShow();
    }
  };

  return (
    <>
      <form className="main" onSubmit={handleSubmit}>
        <div className="container-img">
          <img className="jugador-img" src={JugadorImg} alt="" />
        </div>
        <div className="data-jugador data-jugador-update">
          <h1 className="heading">Registro Jugador</h1>
          <div className="input">
            <label htmlFor="nombre">Nombres: </label>
            <input
              onChange={handleChange}
              type="text"
              name="nombre"
              value={player.nombre}
            />
          </div>
          <div className="input">
            <label htmlFor="apellidos">Apellidos: </label>
            <input
              onChange={handleChange}
              type="text"
              name="apellidos"
              value={player.apellidos}
            />
          </div>

          <div className="input">
            <label htmlFor="nacionalidad">Nacionalidad: </label>
            <input
              onChange={handleChange}
              type="text"
              name="nacionalidad"
              value={player.nacionalidad}
            />
          </div>

          <div className="input two-option">
            <div className="label-fecha">
              <label htmlFor="fecha_nacimiento">Fecha Nacimiento:</label>
              <input
                onChange={handleChange}
                type="date"
                name="fecha_nacimiento"
                value={player.fecha_nacimiento}
                min="1900-01-01"
                max="2001-12-31"
              />
            </div>
            <div>
              <label htmlFor="ranking">Ranking: </label>
              <input
                onChange={handleChange}
                type="number"
                name="ranking"
                value={player.ranking}
              />
            </div>
          </div>

          <div className="input two-option">
            <div>
              <label htmlFor="altura">Altura (cm): </label>
              <input
                onChange={handleChange}
                type="number"
                name="altura"
                value={player.altura}
                min="130"
                max="210"
              />
            </div>
            <div>
              <label htmlFor="peso">Peso (Kg): </label>
              <input
                onChange={handleChange}
                type="number"
                name="peso"
                value={player.peso}
                min="40"
                max="110"
              />
            </div>
          </div>

          <div className="input two-option">
            <div className="container-select">
              <label htmlFor="skilled-hand">Mano Habil: </label>
              <Form.Select
                aria-label="Default select example"
                className="select"
                onChange={handleChange}
                name="mano_habil"
                value={player.mano_habil}
              >
                <option value="">Ver opciones</option>
                <option value="D">Diestro</option>
                <option value="Z">Zurdo</option>
                <option value="A">Ambos</option>
              </Form.Select>
            </div>

            <div className="container-select">
              <label htmlFor="genro">Genero: </label>
              <Form.Select
                aria-label="Default select example"
                className="select"
                onChange={handleChange}
                name="sexo"
                value={player.sexo}
              >
                <option value="">Ver opciones</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </Form.Select>
            </div>
          </div>
          <div className="input">
            <label htmlFor="torneo">Torneo: </label>
            <Form.Select
              aria-label="Default select example"
              className="select"
              onChange={handleChange}
              name="categoria_id"
            >
              <option>Torneo Navideño</option>
            </Form.Select>
          </div>
          <button className="btn-register" type="submit" onClick={handleShow}>
            Registrar Jugador
          </button>
        </div>
      </form>
      <ModalAlert show={show} handleClose={handleClose} mensaje={mensaje} />
    </>
  );
}

export default FormJugador;
