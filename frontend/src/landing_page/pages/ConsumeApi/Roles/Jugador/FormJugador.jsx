import { useState } from "react";
import Form from "react-bootstrap/Form";
import ModalAlert from "../../Modal";
import JugadorImg from "./img-jugador.jpg";

function FormJugador() {
  const [show, setShow] = useState(false);
  const [mensaje, setMensaje] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // validar datos
    if (
      player.nombre === "" ||
      player.apellidos === "" ||
      player.nacionalidad === "" ||
      player.sexo === "" ||
      player.mano_habil === "" ||
      parseFloat(player.peso) <= 0 ||
      parseInt(player.altura) <= 0 ||
      parseInt(player.ranking) < 0
    ) {
      setMensaje("Todos los campos deben ser llenados");
    } else {
      // consulta
      const requestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      };

      fetch("http://localhost:9090/api/jugador/add", requestInit)
        .then((respuesta) => respuesta.json())
        .then((respuesta) => console.log(respuesta));

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

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <form className="main" onSubmit={handleSubmit}>
        <div className="container-img">
          <img className="jugador-img" src={JugadorImg} alt="" />
        </div>
        <div className="data-jugador">
          <h1 className="heading">Registro Jugador</h1>
          <div className="input">
            <label for="nombre">Nombres: </label>
            <input
              onChange={handleChange}
              type="text"
              name="nombre"
              autocomplete="false"
              value={player.nombre}
            />
          </div>
          <div className="input">
            <label for="apellidos">Apellidos: </label>
            <input
              onChange={handleChange}
              type="text"
              name="apellidos"
              autocomplete="false"
              value={player.apellidos}
            />
          </div>

          <div className="input">
            <label for="nacionalidad">Nacionalidad: </label>
            <input
              onChange={handleChange}
              type="text"
              name="nacionalidad"
              autocomplete="false"
              value={player.nacionalidad}
            />
          </div>

          <div className="input two-option">
            <div className="label-fecha">
              <label for="fecha_nacimiento">Fecha Nacimiento:</label>
              <input
                onChange={handleChange}
                type="date"
                name="fecha_nacimiento"
                autocomplete="false"
                value={player.fecha_nacimiento}
              />
            </div>
            <div>
              <label for="ranking">Ranking: </label>
              <input
                onChange={handleChange}
                type="number"
                name="ranking"
                autocomplete="false"
                value={player.ranking}
              />
            </div>
          </div>

          <div className="input two-option">
            <div>
              <label for="altura">Altura (cm): </label>
              <input
                onChange={handleChange}
                type="number"
                name="altura"
                autocomplete="false"
                value={player.altura}
              />
            </div>
            <div>
              <label for="peso">Peso (Kg): </label>
              <input
                onChange={handleChange}
                type="number"
                name="peso"
                autocomplete="false"
                value={player.peso}
              />
            </div>
          </div>

          <div className="input two-option">
            <div className="container-select">
              <label for="skilled-hand">Mano Habil: </label>
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
              <label for="genro">Genero: </label>
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
