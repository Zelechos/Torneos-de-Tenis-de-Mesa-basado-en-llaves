import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState, useEffect } from "react";
import ModalAlert from "../../Modal";

function TablaArbitro() {
  const [refeeres, setRefeere] = useState([]);
  const [listUpdate, setlistUpdate] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleAlertShow = () => setAlert(true);
  const handleAlertClose = () => {
    setlistUpdate(true);
    setAlert(false);
  };

  // GET
  useEffect(() => {
    const getRefeeres = () => {
      fetch("https://spring-370801.wn.r.appspot.com/api/arbitro/mostrar")
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setRefeere(respuesta));
    };
    getRefeeres();
    setlistUpdate(false);
  }, [listUpdate]);

  // DELETE
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };

    fetch(
      "https://spring-370801.wn.r.appspot.com/api/arbitro/" + id,
      requestInit
    )
      .then((respuesta) => respuesta.json())
      .then((respuesta) => setRefeere(respuesta));
  };

  return (
    <>
      <h1 className="title-table">Tabla Arbitros</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Experiencia (años)</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Acreditacion</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {refeeres.map((refeere) => (
            <tr key={refeere.id}>
              <td>{refeere.nombre}</td>
              <td>{refeere.apellido}</td>
              <td>{refeere.experiencia_anos}</td>
              <td>{refeere.email}</td>
              <td>{refeere.telefono}</td>
              <td>
                <Button variant="primary">
                  {refeere.acreditar ? "Acreditado" : "Acreditar"}
                </Button>
              </td>
              <td>
                <div className="options-buttons">
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleAlertShow();
                      handleDelete(refeere.id);
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
        mensaje={"Se elimino el Arbitro"}
      />
    </>
  );
}

export default TablaArbitro;
