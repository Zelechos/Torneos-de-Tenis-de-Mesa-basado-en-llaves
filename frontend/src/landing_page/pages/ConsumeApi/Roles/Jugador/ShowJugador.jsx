import React from "react";
import Button from "react-bootstrap/Button";
import { IoAddCircle } from "react-icons/io5";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import RegisterJugador from "./RegisterJugador";

const ShowJugador = () => {
  const [players, setPlayers] = useState([]);
  const [torneos, setTorneos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [ranking, setRanking] = useState(0);
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [nacionalidad, setNacionalidad] = useState("");
  const [mano_habil, setMano_habil] = useState("");
  const [sexo, setSexo] = useState("");
  const [categoria_id, setCategoria_id] = useState(0);
  const [torneo_id, setTorneo_id] = useState(0);

  let nroJugadores = 0;
  const [operacion, setOperacion] = useState(1);
  const [title, setTitle] = useState("");

  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    getPlayers();
    getCategorias();
    getTorneos();
  });

  // GET
  const getPlayers = async () => {
    const response = await axios.get(
      "https://spring-370801.wn.r.appspot.com/api/jugador/mostrar"
    );
    setPlayers(response.data);
  };

  // GET Torneos
  const getCategorias = async () => {
    const response = await axios.get(
      "https://spring-370801.wn.r.appspot.com/api/categoria/mostrar"
    );
    setCategorias(response.data);
  };

  // GET Torneos
  const getTorneos = async () => {
    const response = await axios.get(
      "https://spring-370801.wn.r.appspot.com/api/torneo/mostrar"
    );
    setTorneos(response.data);
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="container-add">
          <Button variant="primary" className="btn-add" onClick={handleShow}>
            <IoAddCircle /> &nbsp; Agregar Jugadores
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
              {players.map((player) => (
                <tr key={player.id}>
                  <td>{(nroJugadores = nroJugadores + 1)}</td>
                  <td>{player.ranking}</td>
                  <td>{player.nombre}</td>
                  <td>{player.apellidos}</td>
                  <td>{player.nacionalidad}</td>
                  <td>{player.sexo}</td>
                  <td>
                    {" "}
                    <Button
                      variant={player.acreditar ? "secondary" : "primary"}
                    >
                      {player.acreditar ? "Acreditado" : "Acreditar"}
                    </Button>
                  </td>
                  <td>
                    <div className="options-buttons">
                      <Button variant="danger">
                        <AiFillDelete />
                      </Button>
                      &nbsp;
                      <Button variant="primary">
                        <AiFillEdit />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <RegisterJugador
          show={show}
          handleClose={handleClose}
          title={title}
          nombre={nombre}
          setNombre={setNombre}
          apellidos={apellidos}
          setApellidos={setApellidos}
          nacionalidad={nacionalidad}
          setNacionalidad={setNacionalidad}
          fecha_nacimiento={fecha_nacimiento}
          setFechaNacimiento={setFecha_nacimiento}
          ranking={ranking}
          setRanking={setRanking}
          altura={altura}
          setAltura={setAltura}
          peso={peso}
          setPeso={setPeso}
          mano_habil={mano_habil}
          setMano_habil={setMano_habil}
          sexo={sexo}
          setSexo={setSexo}
          torneos={torneos}
          categorias={categorias}
          torneo_id={torneo_id}
          setTorneo_id={setTorneo_id}
          categoria_id={categoria_id}
          setCategoria_id={setCategoria_id}
        />
      </div>
    </div>
  );
};

export default ShowJugador;
