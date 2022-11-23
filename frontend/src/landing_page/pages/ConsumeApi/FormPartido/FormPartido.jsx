import "../formsTournament/FormTournament.css";
function FormPartido() {
  return (
    <div class="main">
      <div class="login">
        <h1 class="heading">Registrar Nuevo Partido</h1>
        <div class="input">
          <label for="username">Nombre del Partido: </label>
          <input type="text" id="name" autocomplete="false" />
        </div>
        <div class="input fecha">
          <div className="labe-fecha">
            <label for="password">Fecha Inicio:</label>
            <input type="date" id="date-inicio" autocomplete="false" />
          </div>
          <div className="labe-fecha">
            <label for="password">Fecha Coclusion:</label>
            <input type="date" id="date-coclusion" autocomplete="false" />
          </div>
        </div>
        <div class="input">
          <label for="username">Lugar: </label>
          <input type="text" id="location" autocomplete="false" />
        </div>
        <div class="input">
          <label for="username">Costo de la Inscripcion (Bs): </label>
          <input type="number" id="costo" autocomplete="false" />
        </div>
        <button class="login-btn">Registrar Torneo</button>
      </div>
    </div>
  );
}

export default FormPartido;
