import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState, useEffect } from "react";

function TablaArbitro() {
  const [refeeres, setRefeere] = useState([]);
  const [listUpdate, setlistUpdate] = useState(false);

  useEffect(() => {
    const getRefeeres = () => {
      fetch("http://localhost:9090/api/arbitro/mostrar")
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setRefeere(respuesta));
    };
    getRefeeres();
    setlistUpdate(false);
  }, [listUpdate]);

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
                <div className="options-buttons">
                  <Button variant="danger">
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
    </>
  );
}

export default TablaArbitro;
