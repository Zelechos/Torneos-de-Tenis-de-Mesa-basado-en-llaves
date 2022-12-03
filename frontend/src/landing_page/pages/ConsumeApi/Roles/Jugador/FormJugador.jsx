import { useState } from "react";
import Form from "react-bootstrap/Form";
import JugadorImg from "./img-jugador.jpg";

function FormJugador() {
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

  const handleSubmit = () => {
    // validar datos
    if (
      player.nombre === "" ||
      player.apellidos === "" ||
      player.nacionalidad === "" ||
      player.sexo === "" ||
      player.mano_habil === "" ||
      parseInt(player.peso) <= 0 ||
      parseFloat(player.altura) <= 0 ||
      parseInt(player.ranking) < 0
    ) {
      alert("Todos los campos deben ser llenados");
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
        peso: 0,
        sexo: "",
        nombre: "",
        ranking: 0,
      });
    }
  };

  return (
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
          />
        </div>
        <div className="input">
          <label for="apellidos">Apellidos: </label>
          <input
            onChange={handleChange}
            type="text"
            name="apellidos"
            autocomplete="false"
          />
        </div>

        <div className="input">
          <label for="nacionalidad">Nacionalidad: </label>
          <input
            onChange={handleChange}
            type="text"
            name="nacionalidad"
            autocomplete="false"
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
            />
          </div>
          <div>
            <label for="ranking">Ranking: </label>
            <input
              onChange={handleChange}
              type="number"
              name="ranking"
              autocomplete="false"
            />
          </div>
        </div>

        <div className="input two-option">
          <div>
            <label for="altura">Altura (mts): </label>
            <input
              onChange={handleChange}
              type="number"
              name="altura"
              autocomplete="false"
            />
          </div>
          <div>
            <label for="peso">Peso (Kg): </label>
            <input
              onChange={handleChange}
              type="number"
              name="peso"
              autocomplete="false"
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
            >
              <option value="">Ver opciones</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </Form.Select>
          </div>
        </div>
        <button className="btn-register" type="submit">
          Registrar Jugador
        </button>
      </div>
    </form>
  );
}

export default FormJugador;
