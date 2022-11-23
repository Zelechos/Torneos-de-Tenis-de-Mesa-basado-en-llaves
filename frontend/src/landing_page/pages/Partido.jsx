import { Link, Outlet } from "react-router-dom";
const Partido = () => {
  return (
    <div className="container-tournament">
      <div className="container-nav-header">
        {/* <h1 className="title-tournament">Mis Torneos</h1> */}
        <div className="cotainer-nav">
          <nav
            className="nav-tornament"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Link to="./" className="link">
              Lista Torneos
            </Link>
            <Link to="./registrar-torneos" className="link">
              Registrar Torneo
            </Link>
          </nav>
        </div>
      </div>

      <div className="sub-ruta">
        <Outlet />
      </div>
    </div>
  );
};

export default Partido;
