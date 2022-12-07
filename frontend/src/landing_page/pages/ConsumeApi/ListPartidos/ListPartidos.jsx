import "./stylesPartidos.css";
import { useState, useEffect } from "react";

function ListPartidos() {
  const [players, setPlayers] = useState([]);
  const [listUpdate, setlistUpdate] = useState(false);

  useEffect(() => {
    const GetPlayers = () => {
      fetch("https://spring-370801.wn.r.appspot.com/api/torneo/crearLlaves")
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setPlayers(respuesta));
    };
    GetPlayers();
    setlistUpdate(false);
  }, [listUpdate]);

  return (
    <>
      <h1 className="title-table">LLaves</h1>
      <ul className="first">
        {players.map((player) => (
          <>
            <li>{player["p1"].nombre}</li>
            <li className="last">{player["p2"].nombre}</li>
          </>
        ))}
      </ul>

      <ul className="second">
        {players.map((player, index) =>
          player["p2"].nombre === "BYE" || player["p1"].nombre === "BYE" ? (
            <>
              <li>{player["p1"].nombre}</li>
            </>
          ) : (
            <>
              <li>-</li>
            </>
          )
        )}
      </ul>

      <ul className="third">
        <li>-</li>
        <li>-</li>
      </ul>

      <ul className="four">
        <li>-</li>
      </ul>
    </>
  );
}

export default ListPartidos;
