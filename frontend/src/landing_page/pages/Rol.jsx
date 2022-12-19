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
              Arbitros
            </Link>
            <Link to="./jugadores" className="link">
              Jugadores
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
