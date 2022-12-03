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
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="main">
      <div className="container-img">
        <img className="jugador-img" src={JugadorImg} alt="" />
      </div>
      <div className="data-jugador">
        <h1 className="heading">Registro Jugador</h1>
        <div className="input">
          <label for="name">Nombres: </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            autocomplete="false"
          />
        </div>
        <div className="input">
          <label for="lastname">Apellidos: </label>
          <input
            onChange={handleChange}
            type="text"
            name="lastname"
            autocomplete="false"
          />
        </div>

        <div className="input">
          <label for="nationality">Nacionalidad: </label>
          <input
            onChange={handleChange}
            type="text"
            name="nationality"
            autocomplete="false"
          />
        </div>

        <div className="input two-option">
          <div className="label-fecha">
            <label for="date-birth">Fecha Nacimiento:</label>
            <input
              onChange={handleChange}
              type="date"
              name="date-birth"
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
            <label for="height">Altura (mts): </label>
            <input
              onChange={handleChange}
              type="number"
              name="height"
              autocomplete="false"
            />
          </div>
          <div>
            <label for="weight">Peso (Kg): </label>
            <input
              onChange={handleChange}
              type="number"
              name="weight"
              autocomplete="false"
            />
          </div>
        </div>

        <div className="input two-option">
          <div className="container-select">
            <label for="skilled-hand">Mano Habil: </label>
            <Form.Select aria-label="Default select example" className="select">
              <option value="D">Diestro</option>
              <option value="Z">Zurdo</option>
              <option value="A">Ambos</option>
            </Form.Select>
          </div>

          <div className="container-select">
            <label for="genro">Genero: </label>
            <Form.Select aria-label="Default select example" className="select">
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </Form.Select>
          </div>
        </div>
        <button className="btn-register">Registrar Jugador</button>
      </div>
    </form>
  );
}

export default FormJugador;
