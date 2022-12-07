import "./stylesPartidos.css";
import { useState, useEffect } from "react";

function ListPartidos() {
  const [players, setPlayers] = useState([]);
  const [listUpdate, setlistUpdate] = useState(false);

  useEffect(() => {
    const GetPlayers = () => {
      fetch("http://localhost:9090/api/arbitro/mostrar")
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setPlayers(respuesta));
    };
    GetPlayers();
    setlistUpdate(false);
  }, [listUpdate]);

  return (
    <>
      <h1 className="title-table">LLaves</h1>
      <ul>
        {players.map((player) => (
          <>
            <li>{player["p1"].nombre}</li>
            <li>{player["p2"].nombre}</li>
          </>
        ))}
      </ul>
    </>
  );
}

export default ListPartidos;
