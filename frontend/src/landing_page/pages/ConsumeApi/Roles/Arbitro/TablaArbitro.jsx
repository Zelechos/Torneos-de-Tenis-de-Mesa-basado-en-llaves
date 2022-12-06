import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

function TablaArbitro() {
  const [refeeres, setRefeere] = useState([]);

  useEffect(() => {
    const getPlayers = () => {
      fetch("http://localhost:9090/api/jugador/mostrar")
        .then((respuesta) => respuesta.json())
        .then((respuesta) => setRefeere(respuesta));
    };
    getPlayers();
  }, []);
  return (
    <>
      <h1 className="title-table">Tabla Arbitros</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>Nacionalidad</th>
            <th>Mano Habil</th>
            <th>Sexo</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {refeeres.map((refeere) => (
            <tr key={refeere.id}>
              <td>{refeere.nombres}</td>
              <td>{refeere.fecha_nacimiento}</td>
              <td>{refeere.apellidos}</td>
              <td>{refeere.experiencia}</td>
              <td>{refeere.nacionalidad}</td>
              <td>{refeere.email}</td>
              <td>{refeere.telefono}</td>
              <td>Eliminar</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TablaArbitro;
