import "../stylesForm.css";
import TorneoImg from "./trofeo.jpg";

function FormTournament() {
  return (
    <div className="main">
      <div className="container-img">
        <img className="torneo-img" src={TorneoImg} alt="" />
      </div>
      <div className="data-torneo">
        <h1 className="heading">Registrar Nuevo Torneo</h1>
        <div className="input">
          <label htmlFor="name">Nombre de tú Torneo: </label>
          <input type="text" id="name" autocomplete="false" />
        </div>
        <div className="input">
          <label htmlFor="description">Descripción Corta: </label>
          <input type="text" id="description" autocomplete="false" />
        </div>
        <div className="input fecha">
          <div className="label-fecha">
            <label htmlFor="date-start">Fecha Inicio:</label>
            <input type="date" id="date-start" autocomplete="false" />
          </div>
          <div className="label-fecha">
            <label htmlFor="date-end">Fecha Conclusión</label>
            <input type="date" id="date-end" autocomplete="false" />
          </div>
        </div>
        <div className="input">
          <label htmlFor="location">Lugar: </label>
          <input type="text" id="location" autocomplete="false" />
        </div>
        <button className="btn-register">Registrar Torneo</button>
      </div>
    </div>
  );
}

export default FormTournament;
