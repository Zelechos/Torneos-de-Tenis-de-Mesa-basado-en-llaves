import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState, useEffect } from "react";
import ModalAlert from "../../Modal";

function TablaArbitro() {
  const [refeeres, setRefeere] = useState([]);
  const [listUpdate, setlistUpdate] = useState(false);
  const [alert, setAlert] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleAlertShow = (mensaje) => {
    setMensaje(mensaje);
    setAlert(true);
  };
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

  //ACREDITACION ARBITRO
  const acreditar = (refeere_acreditar) => {
    if (!refeere_acreditar.acreditar) {
      /*
      const requestInit = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(refeeres),
      };

      fetch("https://spring-370801.wn.r.appspot.com/api/arbitro/" + refeere_acreditar.id,requestInit)
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setRefeere(respuesta));
    */
      setlistUpdate(true);
    }
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
                <Button
                  variant={refeere.acreditar ? "secondary" : "primary"}
                  onClick={() => {
                    handleAlertShow(
                      refeere.acreditar
                        ? "El Arbitro ya esta Acreditado"
                        : "Se Acredito el Arbitro"
                    );
                    acreditar(refeere);
                  }}
                >
                  {refeere.acreditar ? "Acreditado" : "Acreditar"}
                </Button>
              </td>
              <td>
                <div className="options-buttons">
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleAlertShow("Se elimino el Arbitro");
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
        mensaje={mensaje}
      />
    </>
  );
}

export default TablaArbitro;
