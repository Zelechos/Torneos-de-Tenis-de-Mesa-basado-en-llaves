import JuezImg from "./juez.jpg";

function FormArbitro() {
  return (
    <div className="main">
      <div className="container-img">
        <img className="juez-img" src={JuezImg} alt="" />
      </div>
      <div className="data-arbitro">
        <h1 className="heading">Registro Arbitro</h1>
        <div className="input">
          <label htmlFor="nombre">Nombres: </label>
          <input type="text" name="nombre" />
        </div>
        <div className="input">
          <label htmlFor="apellido">Apellidos: </label>
          <input type="text" name="apellido" />
        </div>
        <div className="input fecha">
          <div className="label-fecha">
            <label htmlFor="fecha_nacimiento">Fecha Nacimiento:</label>
            <input type="date" name="fecha_nacimiento" />
          </div>
          <div>
            <label htmlFor="experiencia_anos">Experiencia en años: </label>
            <input type="number" name="experiencia_anos" />
          </div>
        </div>
        <div className="input">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" />
        </div>
        <div className="input">
          <label htmlFor="telefono">Telefono: </label>
          <input type="number" name="telefono" />
        </div>
        <button className="btn-register">Registrar Arbitro</button>
      </div>
    </div>
  );
}

export default FormArbitro;
