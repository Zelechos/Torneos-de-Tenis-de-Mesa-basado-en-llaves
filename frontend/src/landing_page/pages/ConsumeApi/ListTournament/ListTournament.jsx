import Table from "react-bootstrap/Table";

function ListTournament() {
  return (
    <>
      <h1 className="title-table">Tabla Torneos</h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Administrador</th>
            <th>Categoria</th>
            <th>Descripcion</th>
            <th>Sede</th>
            <th>Fecha Inicio</th>
            <th>Fecha Final</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rey</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Rey</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Rey</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ListTournament;
