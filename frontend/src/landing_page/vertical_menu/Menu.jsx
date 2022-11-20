import "./Menu.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Torneo from "../pages/Torneo";
import Partido from "../pages/Partido";
import Rol from "../pages/Rol";

import { FaTrophy } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiGroupFill } from "react-icons/ri";
import { GiTatteredBanner } from "react-icons/gi";

const Menu = () => {
  return (
    <div className="navegacion-principal">
      <div className="container-menu-principal">
        <h4>Menu principal</h4>
        <nav>
          <div className="container-menu">
            <AiFillHome className="icon" />
            <Link to="/" className="text text-md text-[#1A202C]/80 mb-1">
              Inicio
            </Link>
          </div>
          <hr />

          <div className="container-menu">
            <FaTrophy className="icon" />
            <Link to="/torneo" className="text text-md text-[#1A202C]/80 mb-1">
              Torneo
            </Link>
          </div>
          <hr />

          <div className="container-menu">
            <GiTatteredBanner className="icon" />
            <Link to="/partido" className="text text-md text-[#1A202C]/80 mb-1">
              Partido
            </Link>
          </div>
          <hr />

          <div className="container-menu">
            <RiGroupFill className="icon" />
            <Link to="/roles" className="text text-md text-[#1A202C]/80 mb-1">
              Roles
            </Link>
          </div>
        </nav>
      </div>
      <div className="ruta">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/torneo" element={<Torneo />} />
          <Route path="/partido" element={<Partido />} />
          <Route path="/roles" element={<Rol />} />
        </Routes>
      </div>
    </div>
  );
};

export default Menu;
