import "./FormTournament.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormTournament() {
  return (
    <div class="main">
      <div class="login">
        <h1 class="heading">Registrar Nuevo Torneo</h1>
        <div class="input">
          <label for="username">Nombre de tú Torneo: </label>
          <input type="text" id="username" autocomplete="false" />
        </div>
        <div class="input">
          <label for="username">Descripción Corta: </label>
          <input type="text" id="username" autocomplete="false" />
        </div>
        <div class="input">
          <label for="password">Fecha Inicio</label>
          <input type="date" id="password" autocomplete="false" />
        </div>
        <div class="divider"></div>
        <button class="login-btn">Crear Torneo</button>
      </div>
    </div>
  );
}

export default FormTournament;
