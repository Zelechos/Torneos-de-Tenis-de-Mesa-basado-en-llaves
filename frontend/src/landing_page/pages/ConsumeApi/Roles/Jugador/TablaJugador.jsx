import Table from "react-bootstrap/Table";

function TablaJugador() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>Eliminar</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>Eiminar</td>
        </tr>
        <tr>
          <td>3</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>Eliminar</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TablaJugador;
