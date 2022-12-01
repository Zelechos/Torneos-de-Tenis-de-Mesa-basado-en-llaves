import { Link, Outlet } from "react-router-dom";
import "./styles/Rol.css";

const Rol = () => {
  return (
    <div className="container-arbitro">
      <div className="container-nav-header">
        <div className="cotainer-nav">
          <nav
            className="nav-arbitro"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Link to="./" className="link">
              Registrar Arbitro
            </Link>
            <Link to="./listar-arbitro" className="link">
              Listar Arbitros
            </Link>
            <Link to="./registrar-jugador" className="link">
              Registrar Jugador
            </Link>
            <Link to="./listar-jugador" className="link">
              Listar Jugadores
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

export default Rol;
