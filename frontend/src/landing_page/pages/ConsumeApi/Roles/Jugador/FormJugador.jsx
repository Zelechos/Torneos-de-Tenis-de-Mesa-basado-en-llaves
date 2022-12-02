import { useState } from "react";
import Form from "react-bootstrap/Form";
import JugadorImg from "./img-jugador.jpg";

function FormJugador() {
  const [player, setPlayer] = useState({
    nombre: "",
    apellidos: "",
    fecha_nacimiento: "",
    altura: 0.0,
    peso: 0.0,
    nacionalidad: "",
    mano_habil: "",
    genero: "",
  });

  return (
    <form className="main">
      <div className="container-img">
        <img className="jugador-img" src={JugadorImg} alt="" />
      </div>
      <div className="data-jugador">
        <h1 className="heading">Registro Jugador</h1>
        <div className="input">
          <label for="name">Nombres: </label>
          <input type="text" id="name" autocomplete="false" />
        </div>
        <div className="input">
          <label for="lastname">Apellidos: </label>
          <input type="text" id="lastname" autocomplete="false" />
        </div>
        <div className="input two-option">
          <div className="label-fecha">
            <label for="date-birth">Fecha Nacimiento:</label>
            <input type="date" id="date-birth" autocomplete="false" />
          </div>
          <div>
            <label for="height">Altura (cm): </label>
            <input type="number" id="height" autocomplete="false" />
          </div>
        </div>

        <div className="input two-option">
          <div>
            <label for="nationality">Nacionalidad: </label>
            <input type="text" id="nationality" autocomplete="false" />
          </div>
          <div>
            <label for="weight">Peso (Kg): </label>
            <input type="number" id="weight" autocomplete="false" />
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
              <option value="O">Otro</option>
            </Form.Select>
          </div>
        </div>

        <div className="input">
          <label for="email">Email: </label>
          <input type="email" id="email" autocomplete="false" />
        </div>
        <div className="input">
          <label for="phone">Telefono: </label>
          <input type="number" id="phone" autocomplete="false" />
        </div>
        <div className="input">
          <label for="direcction">Dirección: </label>
          <input type="text" id="direcction" Direccion="false" />
        </div>
        <button className="btn-register">Registrar Jugador</button>
      </div>
    </form>
  );
}

export default FormJugador;
