import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alert } from "../funtions";
import { IoAddCircle } from "react-icons/io5";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import FormUpdate from "./FormUpdate";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import RegisterJugador from "./RegisterJugador";

const TablaJugador = () => {
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
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState("");

  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getPlayers();
    getCategorias();
    getTorneos();
  }, []);

  // GET
  const getPlayers = () => {
    fetch("https://spring-370801.wn.r.appspot.com/api/jugador/mostrar")
      .then((respuesta) => respuesta.json())
      .then((respuesta) => setPlayers(respuesta));
    console.log("entro");
  };

  // GET Categorias
  const getCategorias = async () => {
    const respuesta = await axios.get(
      "https://spring-370801.wn.r.appspot.com/api/categoria/mostrar"
    );
    setCategorias(respuesta.data);
  };

  // GET Torneos
  const getTorneos = async () => {
    const respuesta = await axios.get(
      "https://spring-370801.wn.r.appspot.com/api/torneo/mostrar"
    );
    setTorneos(respuesta.data);
  };

  //Operaciones
  const openModal = (
    operacion,
    id,
    nombre,
    apellidos,
    fecha_nacimiento,
    ranking,
    altura,
    peso,
    nacionalidad,
    mano_habil,
    sexo,
    categoria_id,
    torneo_id
  ) => {
    setTitle("");
    setNombre("");
    setApellidos("");
    setFecha_nacimiento("");
    setRanking(0);
    setAltura(0);
    setPeso(0);
    setNacionalidad("");
    setMano_habil("");
    setTorneo_id("");
    setSexo("");
    setCategoria_id(0);

    if (operacion === 1) {
      setTitle("Registrar Jugador");
      setOperation(1);
    }
    if (operacion === 2) {
      setTitle("Editar Jugador");
      setOperation(2);
      setNombre(nombre);
      setApellidos(apellidos);
      setFecha_nacimiento(fecha_nacimiento);
      setRanking(ranking);
      setAltura(altura);
      setPeso(peso);
      setNacionalidad(nacionalidad);
      setMano_habil(mano_habil);
      setSexo(sexo);
      setCategoria_id(categoria_id);
      setTorneo_id(torneo_id);
    }
    window.setTimeout(function () {
      document.getElementById("nombre").focus();
    }, 500);
  };

  const validar = () => {
    let parametros;
    let metodo;
    let url;
    if (nombre.trim() === "")
      show_alert("Ingresa el nombre o nombres del Jugador", "warning");
    else if (apellidos.trim() === "")
      show_alert("Ingresa los apellidos del Jugador", "warning");
    else if (apellidos.trim() === "")
      show_alert("Ingresa los apellidos del Jugador", "warning");
    else if (isNaN(Date.parse(fecha_nacimiento)))
      show_alert("Ingresa la Fecha de Nacimiento", "warning");
    else if (ranking < 1 || ranking > 1000)
      show_alert(
        "El ranking debe comprendese minimo 1, maximo 1000",
        "warning"
      );
    else if (altura < 130 || altura > 220)
      show_alert(
        "La altura debe comprendese minimo 130cm, maximo 220cm",
        "warning"
      );
    else if (peso < 40 || peso > 120)
      show_alert(
        "El peso debe comprendese minimo 40Kg, maximo 120Kg",
        "warning"
      );
    else if (nacionalidad.trim() === "")
      show_alert("Ingresa la Nacionalidad", "warning");
    else if (mano_habil !== "Z" && mano_habil !== "D")
      show_alert("Seleccione Mano Habil", "warning");
    else if (sexo !== "M" && sexo !== "F")
      show_alert("Seleccione un Genero", "warning");
    else {
      if (operation === 1) {
        parametros = {
          nombre: nombre.trim(),
          apellidos: apellidos.trim(),
          fecha_nacimiento: fecha_nacimiento.trim(),
          ranking: ranking,
          altura: altura,
          peso: peso,
          nacionalidad: nacionalidad.trim(),
          mano_habil: mano_habil,
          sexo: sexo,
          torneo_id: torneo_id,
          categoria_id: categoria_id,
        };
        metodo = "POST";
        url = "https://spring-370801.wn.r.appspot.com/api/jugador/add";
      } else {
        parametros = {
          nombre: nombre.trim(),
          apellidos: apellidos.trim(),
          fecha_nacimiento: fecha_nacimiento.trim(),
          ranking: ranking,
          altura: altura,
          peso: peso,
          nacionalidad: nacionalidad.trim(),
          mano_habil: mano_habil,
          sexo: sexo,
          torneo_id: torneo_id,
          categoria_id: categoria_id,
        };
        metodo = "PUT";
        url = "https://spring-370801.wn.r.appspot.com/api/jugador/" + id;
      }
      enviarSolicitud(metodo, parametros, url);
    }
  };

  const enviarSolicitud = async (metodo, parametros, url) => {
    if (metodo === "DELETE") {
      await axios({ method: metodo, url, data: parametros })
        .then(function (response) {
          getPlayers();
        })
        .catch(function (error) {
          show_alert("Error en la Solicitud", "error");
          console.log(error);
        });
    } else {
      await axios({ method: metodo, url, data: parametros })
        .then(function (response) {
          if (metodo === "POST") show_alert("Jugador Registrado", "success");
          if (metodo === "PUT")
            show_alert("Se actualizo el Jugador", "success");
          document.getElementById("cancelar").click();
          getPlayers();
        })
        .catch(function (error) {
          show_alert("Error en la Solicitud", "error");
          console.log(error);
        });
    }
  };

  const deleteJugador = (id, nombre) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "¿Seguro desea elminar el Jugador " + nombre + "?",
      icon: "question",
      text: "No se podra marcha atras",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        show_alert("Se elimino el Jugador", "success");
        enviarSolicitud(
          "DELETE",
          {},
          "https://spring-370801.wn.r.appspot.com/api/jugador/" + id
        );
      } else {
        show_alert("El Jugador NO fue eliminado", "info");
      }
    });
  };

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-md-4 offse-md-4">
              <div className="d-grid mx-auto">
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShow();
                    openModal(1);
                  }}
                >
                  <IoAddCircle /> &nbsp; Agregar Jugadores
                </Button>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-ig-8 offset-0 offset-lg-0">
              <div className="table-responsive">
                <Table striped bordered hover variant="dark" className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>RANKING</th>
                      <th>JUGADOR</th>
                      <th>APELLIDOS</th>
                      <th>NACIONALIDAD</th>
                      <th>SEXO</th>
                      <th>ACREDITACION</th>
                      <th>OPCIONES</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {players.map((player) => (
                      <tr key={player.id}>
                        <td>{(nroJugadores = nroJugadores + 1)}</td>
                        <td>
                          {new Intl.NumberFormat("es-mx").format(
                            player.ranking
                          )}
                        </td>
                        <td>{player.nombre}</td>
                        <td>{player.apellidos}</td>
                        <td>{player.nacionalidad}</td>
                        <td>{player.sexo}</td>
                        <td>
                          <Button
                            variant={player.acreditar ? "secondary" : "primary"}
                          >
                            {player.acreditar ? "Desacreditar" : "Acreditar"}
                          </Button>
                        </td>
                        <td>
                          <div className="options-buttons">
                            <Button
                              variant="danger"
                              onClick={() => {
                                deleteJugador(player.id, player.nombre);
                              }}
                            >
                              <AiFillDelete />
                            </Button>
                            &nbsp;
                            <Button
                              variant="primary"
                              onClick={() => {
                                handleShow();
                                openModal(
                                  2,
                                  setId(player.id),
                                  player.nombre,
                                  player.apellidos,
                                  player.fecha_nacimiento,
                                  player.ranking,
                                  player.altura,
                                  player.peso,
                                  player.nacionalidad,
                                  player.mano_habil,
                                  player.sexo,
                                  player.categoria_id,
                                  player.torneo_id
                                );
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
              </div>
            </div>
          </div>
        </div>
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
        id={id}
        operacion={operation}
        getPlayers={getPlayers()}
      />
    </>
  );
};

export default TablaJugador;
