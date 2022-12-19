import "./Menu.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Torneo from "../pages/Torneo";
import Partido from "../pages/Partido";
import Rol from "../pages/Rol";
import Reportes from "../pages/Reportes";

import { FaTrophy } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiGroupFill } from "react-icons/ri";
import { GiTatteredBanner } from "react-icons/gi";
import { HiDocumentReport } from "react-icons/hi";

import ListTournament from "../pages/ConsumeApi/Torneo/ListTournament";
import FormTournament from "../pages/ConsumeApi/Torneo/FormTournament";
import ShowTorneo from "../pages/ConsumeApi/Torneo/ShowTorneo";
import FormPartido from "../pages/ConsumeApi/FormPartido/FormPartido";
import ListPartidos from "../pages/ConsumeApi/ListPartidos/ListPartidos";
import Arbitro from "../pages/ConsumeApi/Roles/Arbitro/Arbitro";
import Jugador from "../pages/ConsumeApi/Roles/Jugador/Jugador.jsx";

const Menu = () => {
  return (
    <div className="navegacion-principal">
      <div className="container-menu-principal">
        <h1 className="text-center text-xl text-[#17163f] font-bold mb-6">
          Menu principal
        </h1>
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
          <hr />

          <div className="container-menu">
            <HiDocumentReport className="icon" />
            <Link
              to="/reportes"
              className="text text-md text-[#1A202C]/80 mb-1"
            >
              Reportes
            </Link>
          </div>
        </nav>
      </div>
      <div className="rutas">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/torneo" element={<Torneo />}>
            **
            <Route index element={<ListTournament />} />
            **
            <Route path="registrar-torneos" element={<FormTournament />} />
            <Route path="torneos" element={<ShowTorneo />} />
          </Route>

          <Route path="/partido" element={<Partido />}>
            **
            <Route index element={<ListPartidos />} />
            **
            <Route path="registrar-partido" element={<FormPartido />} />
          </Route>
          <Route path="/roles" element={<Rol />}>
            **
            <Route index element={<Arbitro />} />
            **
            <Route path="jugadores" element={<Jugador />} />
          </Route>
          <Route path="/reportes" element={<Reportes />} />
        </Routes>
      </div>
    </div>
  );
};

export default Menu;
