import React from "react";
import Button from "react-bootstrap/Button";
import { IoAddCircle } from "react-icons/io5";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const ShowJugador = () => {
  const [players, setPlayers] = useState([]);
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [nacionalidad, setNacionalidad] = useState("");
  const [mano_habil, setMano_habil] = useState("");
  const [sexo, setSexo] = useState("");
  const [rankig, setRankig] = useState(0);
  const [categoria_id, setCategoria_id] = useState(0);
  const [torneo, setTorneo_id] = useState(0);

  let nroJugadores = 0;
  const [operacion, setOperacion] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getPlayers();
  });

  // GET
  const getPlayers = async () => {
    const response = await axios.get(
      "https://spring-370801.wn.r.appspot.com/api/jugador/mostrar"
    );
    setPlayers(response.data);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="container-add">
          <Button variant="primary" className="btn-add">
            <IoAddCircle /> Agregar Jugadores
          </Button>
        </div>
        <div className="container-table">
          <Table striped bordered hover variant="dark" className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Ranking</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Nacionalidad</th>
                <th>Sexo</th>
                <th>Acreditacion</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  <td>{(nroJugadores = nroJugadores + 1)}</td>
                  <td>{player.ranking}</td>
                  <td>{player.nombre}</td>
                  <td>{player.apellidos}</td>
                  <td>{player.nacionalidad}</td>
                  <td>{player.sexo}</td>
                  <td>
                    {" "}
                    <Button
                      variant={player.acreditar ? "secondary" : "primary"}
                    >
                      {player.acreditar ? "Acreditado" : "Acreditar"}
                    </Button>
                  </td>
                  <td>
                    <div className="options-buttons">
                      <Button variant="danger">
                        <AiFillDelete />
                      </Button>
                      &nbsp;
                      <Button variant="primary">
                        <AiFillEdit />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ShowJugador;
