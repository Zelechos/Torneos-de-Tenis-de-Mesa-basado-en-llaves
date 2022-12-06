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
          <label htmlFor="name">Nombres: </label>
          <input type="text" id="name" autocomplete="false" />
        </div>
        <div className="input">
          <label htmlFor="lastname">Apellidos: </label>
          <input type="text" id="lastname" autocomplete="false" />
        </div>
        <div className="input fecha">
          <div className="label-fecha">
            <label htmlFor="date-birth">Fecha Nacimiento:</label>
            <input type="date" id="date-birth" autocomplete="false" />
          </div>
          <div>
            <label htmlFor="experience">Experiencia en años: </label>
            <input type="number" id="experience" autocomplete="false" />
          </div>
        </div>
        <div className="input">
          <label htmlFor="nationality">Nacionalidad: </label>
          <input type="text" id="nationality" autocomplete="false" />
        </div>
        <div className="input">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" autocomplete="false" />
        </div>
        <div className="input">
          <label htmlFor="phone">Telefono: </label>
          <input type="number" id="phone" autocomplete="false" />
        </div>
        <button className="btn-register">Registrar Arbitro</button>
      </div>
    </div>
  );
}

export default FormArbitro;
