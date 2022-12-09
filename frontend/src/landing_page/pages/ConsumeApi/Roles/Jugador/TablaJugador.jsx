import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import FormUpdate from "./FormUpdate";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import ModalAlert from "../../Modal";

function TablaJugador() {
  const [players, setPlayers] = useState([]);
  const [listUpdate, setlistUpdate] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleShow = () => setShow(true);
  const handleAlertShow = (mensaje) => {
    setMensaje(mensaje);
    setAlert(true);
  };
  const handleClose = () => setShow(false);
  const handleAlertClose = () => {
    setlistUpdate(true);
    setAlert(false);
  };

  const [player, setPlayer] = useState({});

  // GET
  useEffect(() => {
    const getPlayers = () => {
      fetch("https://spring-370801.wn.r.appspot.com/api/jugador/mostrar")
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

    fetch(
      "https://spring-370801.wn.r.appspot.com/api/jugador/" + id,
      requestInit
    )
      .then((respuesta) => respuesta.json())
      .then((respuesta) => setPlayers(respuesta));
  };

  // UPDATE
  const handleUpdate = (player) => {
    setPlayer(player);
  };

  //ACREDITACION JUGADOR
  const acreditarJugador = (jugador_acreditar) => {
    if (!jugador_acreditar.acreditar) {
      const requestInit = {
        method: "PUT",
      };

      fetch(
        "https://spring-370801.wn.r.appspot.com/api/jugador/acreditar/" +
          jugador_acreditar.id,
        requestInit
      )
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setPlayers(respuesta));
      setlistUpdate(true);
    }
  };

  let nroJu = 0;
  return (
    <>
      <h1 className="title-table">Tabla Jugadores</h1>
      <Table striped bordered hover variant="dark" className="table">
        <thead>
          <tr>
            <th>Nro</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Ranking</th>
            <th>Altura(cm)</th>
            <th>Peso(Kg)</th>
            <th>Nacionalidad</th>
            <th>Mano Habil</th>
            <th>Sexo</th>
            <th>Acreditacion</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{(nroJu = nroJu + 1)}</td>
              <td>{player.nombre}</td>
              <td>{player.apellidos}</td>
              <td>{player.ranking}</td>
              <td>{player.altura}</td>
              <td>{player.peso}</td>
              <td>{player.nacionalidad}</td>
              <td>{player.mano_habil}</td>
              <td>{player.sexo}</td>
              <td>
                <Button
                  variant={player.acreditar ? "secondary" : "primary"}
                  onClick={() => {
                    handleAlertShow(
                      player.acreditar
                        ? "El Jugador ya esta Acreditado"
                        : "Se Acredito el Jugador"
                    );
                    acreditarJugador(player);
                  }}
                >
                  {player.acreditar ? "Acreditado" : "Acreditar"}
                </Button>
              </td>
              <td>
                <div className="options-buttons">
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleAlertShow("Se elimino el Jugador");
                      handleDelete(player.id);
                    }}
                  >
                    <AiFillDelete />
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleShow();
                      handleUpdate(player.id);
                    }}
                  >
                    <AiFillEdit />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <FormUpdate show={show} handleClose={handleClose} jugador={player} />
      <ModalAlert
        show={alert}
        handleClose={handleAlertClose}
        mensaje={mensaje}
      />
    </>
  );
}

export default TablaJugador;
