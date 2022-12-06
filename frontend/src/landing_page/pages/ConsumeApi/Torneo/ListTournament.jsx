import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import ModalAlert from "../Modal";

function ListTournament() {
  const [listUpdate, setlistUpdate] = useState(false);
  const [torneos, setTorneos] = useState([]);
  const [alert, setAlert] = useState(false);

  const handleAlertShow = () => setAlert(true);
  const handleAlertClose = () => {
    setlistUpdate(true);
    setAlert(false);
  };

  // GET
  useEffect(() => {
    const getTorneos = () => {
      fetch("https://spring-370801.wn.r.appspot.com/api/torneo/mostrar")
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setTorneos(respuesta));
    };
    getTorneos();
    setlistUpdate(false);
  }, [listUpdate]);

  // DELETE
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };

    fetch(
      "https://spring-370801.wn.r.appspot.com/api/torneo/" + id,
      requestInit
    )
      .then((respuesta) => respuesta.json())
      .then((respuesta) => setTorneos(respuesta));
  };

  return (
    <>
      <h1 className="title-table">Tabla Torneos</h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Sede</th>
            <th>Lugar</th>
            <th>Fecha Inicio</th>
            <th>Fecha Final</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {torneos.map((torneo) => (
            <tr key={torneo.id}>
              <td>{torneo.nombre}</td>
              <td>{torneo.sede}</td>
              <td>{torneo.lugar}</td>
              <td>{torneo.fecha_inicio}</td>
              <td>{torneo.fecha_final}</td>
              <td>{torneo.categoria_id}</td>
              <td>
                <div className="options-buttons">
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleAlertShow();
                      handleDelete(torneo.id);
                    }}
                  >
                    <AiFillDelete />
                  </Button>
                  <Button variant="primary">
                    <AiFillEdit />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalAlert
        show={alert}
        handleClose={handleAlertClose}
        mensaje={"Se elimino el Torneo"}
      />
    </>
  );
}

export default ListTournament;
