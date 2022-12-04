import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import FormUpdate from "./FormUpdate";

function TablaJugador() {
  const [players, setPlayers] = useState([]);
  const [listUpdate, setlistUpdate] = useState(false);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [player, setPlayer] = useState({
    altura: 0,
    apellidos: "",
    fecha_nacimiento: "",
    mano_habil: "",
    nacionalidad: "",
    peso: 0,
    sexo: "",
    nombre: "",
    ranking: 0,
  });

  // GET
  useEffect(() => {
    const getPlayers = () => {
      fetch("http://localhost:9090/api/jugador/mostrar")
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setPlayers(respuesta));
    };
    getPlayers();
    setlistUpdate(false);
  }, [listUpdate]);

  // DELETE
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };

    fetch("http://localhost:9090/api/jugador/" + id, requestInit)
      .then((respuesta) => respuesta.json())
      .then((respuesta) => console.log(respuesta));

    setlistUpdate(true);
  };

  // UPDATE
  const handleUpdate = (id) => {
    const requestInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
    };

    fetch("http://localhost:9090/api/jugador/" + id, requestInit)
      .then((respuesta) => respuesta.json())
      .then((respuesta) => console.log(respuesta));

    setlistUpdate(true);
  };
  return (
    <>
      <h1 className="title-table">Tabla Jugadores</h1>
      <Table striped bordered hover variant="dark" className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Ranking</th>
            <th>Altura(cm)</th>
            <th>Peso(Kg)</th>
            <th>Nacionalidad</th>
            <th>Mano Habil</th>
            <th>Sexo</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.nombre}</td>
              <td>{player.apellidos}</td>
              <td>{player.ranking}</td>
              <td>{player.altura}</td>
              <td>{player.peso}</td>
              <td>{player.nacionalidad}</td>
              <td>{player.mano_habil}</td>
              <td>{player.sexo}</td>
              <td>
                <div className="mb'3">
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(player.id)}
                  >
                    Eliminar
                  </Button>{" "}
                </div>
                <div className="mb'3">
                  <Button variant="primary" onClick={handleShow}>
                    Configurar
                  </Button>{" "}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <FormUpdate show={show} handleClose={handleClose} />
    </>
  );
}

export default TablaJugador;
