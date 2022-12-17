import React from "react";
import Button from "react-bootstrap/Button";
import { IoAddCircle } from "react-icons/io5";
import Table from "react-bootstrap/Table";

const ShowJugador = () => {
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
              <tr>
                <td>1</td>
                <td>56</td>
                <td>Luis Angel</td>
                <td>Mendoza Lopez</td>
                <td>Bolivia</td>
                <td>M</td>{" "}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ShowJugador;
