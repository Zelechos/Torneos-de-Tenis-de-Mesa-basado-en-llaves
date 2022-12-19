import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alert } from "../funtions";
import { IoSaveSharp } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ShowPlayers = () => {
  const [id, setId] = useState(0);
  const [players, setPlayers] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [nacionalidad, setNacionalidad] = useState("");
  const [mano_habil, setMano_habil] = useState("");
  const [sexo, setSexo] = useState("");
  const [ranking, setRanking] = useState(0);
  const [categoria_id, setCategoria_id] = useState(0);
  const [torneo_id, setTorneo_id] = useState(0);
  // tipo de funcion a realizar
  const [operation, setOperation] = useState(1);
  // titulo del modal
  const [title, setTitle] = useState("");
  let nroJugadores = 0;

  const [torneos, setTorneos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  // MODAL
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
    setNombre("");
    setApellidos("");
    setFecha_nacimiento("");
    setRanking(0);
    setAltura(0);
    setPeso(0);
    setNacionalidad("");
    setMano_habil("");
    setSexo("");
    setCategoria_id(0);
    setTorneo_id(0);

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

  // Validacionde de los datos
  const validar = () => {
    let parametros;
    let metodo;
    let url;

    if (nombre.trim() === "")
      show_alert("Ingrese el nombre del Jugador", "warning");
    else if (apellidos.trim() === "")
      show_alert("Ingrese los apellidos del Jugador", "warning");
    else if (nacionalidad.trim() === "")
      show_alert("Ingrese la nacionalidad", "warning");
    else if (mano_habil !== "Z" && mano_habil !== "D")
      show_alert("Seleccione Mano Habil", "warning");
    else if (sexo !== "M" && sexo !== "F")
      show_alert("Seleccione un genero", "warning");
    else if (isNaN(Date.parse(fecha_nacimiento)))
      show_alert("Ingrese la Fecha de Nacimiento", "warning");
    else if (ranking < 1 || ranking > 1000)
      show_alert("Ingrese el Ranking", "warning");
    else if (altura < 130 || altura > 220)
      show_alert(
        "La altura debe comprenderse minimo 130cm, maximo 220cm",
        "warning"
      );
    else if (peso < 40 || peso > 120)
      show_alert(
        "El peso debe comprenderse minimo 40kg, maximo 120kg",
        "warning"
      );
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

  // Peticiones
  const enviarSolicitud = async (metodo, parametros, url) => {
    if (metodo === "DELETE") {
      await axios({ method: metodo, url, data: parametros })
        .then(function (response) {
          getPlayers();
        })
        .catch(function (error) {
          show_alert("Error en la Solicitud", "error");
        });
    } else if (metodo === "ACREDITAR") {
      await axios({ method: "PUT", url, data: parametros })
        .then(function (response) {
          getPlayers();
        })
        .catch(function (error) {
          show_alert("Error en la Solicitud", "error");
        });
    } else {
      await axios({ method: metodo, url, data: parametros })
        .then(function (response) {
          if (metodo === "POST") {
            if (parametros.sexo === "F") {
              show_alert("Jugadora Registrada", "success");
            } else {
              show_alert("Jugador Registrado", "success");
            }
          }
          if (metodo === "PUT")
            show_alert("Se actualizo el Jugador", "success");
          document.getElementById("cancelar").click();
          getPlayers();
        })
        .catch(function (error) {
          show_alert("Error en la Solicitud", "error");
        });
    }
  };

  // Eliminar Jugador
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

  // Acreditar Jugador
  const acreditar = (player, nombre) => {
    let title = "";
    let text = "";
    let mensaje = "";
    let mensaje2 = "";
    let btnMsj = "";
    if (!player.acreditar) {
      title = "¿Desea Acreditar a " + nombre + "?";
      text = "El jugador podra participar en torneos";
      mensaje = "Jugador " + nombre + " Acreditado";
      mensaje2 = "El participante NO fue acreditado";
      btnMsj = "Si, acreditar";
    } else {
      title = "¿Desacreditar al jugador " + nombre + "?";
      text = "El jugador ya NO podra participar en torneos";
      mensaje = "Jugador " + nombre + " Desacreditado";
      mensaje2 = "El Jugador se mantiene acreditado";
      btnMsj = "Si, desacreditar";
    }

    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: title,
      icon: "question",
      text: text,
      showCancelButton: true,
      confirmButtonText: btnMsj,
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        show_alert(mensaje, "success");
        enviarSolicitud(
          "ACREDITAR",
          {},
          "https://spring-370801.wn.r.appspot.com/api/jugador/acreditar/" +
            player.id
        );
      } else {
        show_alert(mensaje2, "info");
      }
    });
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="container-add">
          <Button
            variant="primary"
            className="btn-add"
            onClick={() => {
              openModal(1);
              handleShow();
            }}
          >
            <IoAddCircle /> &nbsp; Agregar Jugadores
          </Button>
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
                        {new Intl.NumberFormat("es-mx").format(player.ranking)}
                      </td>
                      <td>{player.nombre}</td>
                      <td>{player.apellidos}</td>
                      <td>{player.nacionalidad}</td>
                      <td>{player.sexo}</td>
                      <td>
                        <Button
                          variant={player.acreditar ? "secondary" : "primary"}
                          onClick={() => {
                            acreditar(player, player.nombre);
                          }}
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input">
            <label htmlFor="nombres">Nombres: </label>
            <input
              type="text"
              id="nombre"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="apellidos">Apellidos: </label>
            <input
              type="text"
              id="apellidos"
              className="form-control"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="nacionalidad">Nacionalidad: </label>
            <input
              type="text"
              id="nacionalidad"
              className="form-control"
              value={nacionalidad}
              onChange={(e) => setNacionalidad(e.target.value)}
            />
          </div>
          <div className="input two-option">
            <div className="input">
              <label htmlFor="fecha_nacimiento">Fecha de Nacimiento: </label>
              <input
                type="date"
                id="fecha_nacimiento"
                className="form-control"
                value={fecha_nacimiento}
                onChange={(e) => setFecha_nacimiento(e.target.value)}
                min="1900-01-01"
                max="2001-12-31"
              />
            </div>
            <div className="input">
              <label htmlFor="ranking">Ranking: </label>
              <input
                type="number"
                id="ranking"
                className="form-control"
                value={ranking}
                onChange={(e) => setRanking(e.target.value)}
                min="0"
                max="1000"
              />
            </div>
          </div>
          <div className="input two-option">
            <div className="input">
              <label htmlFor="altura">Altura: </label>
              <input
                type="number"
                id="altura"
                className="form-control"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                min="130"
                max="220"
              />
            </div>
            <div className="input">
              <label htmlFor="peso">Peso: </label>
              <input
                type="number"
                id="peso"
                className="form-control"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                min="40"
                max="200"
              />
            </div>
          </div>
          <div className="input two-option">
            <div className="container-select">
              <label htmlFor="mano_habil">Mano Habil: </label>
              <Form.Select
                className="select"
                onChange={(e) => setMano_habil(e.target.value)}
                name="mano_habil"
                value={mano_habil}
              >
                <option>Ver Opciones</option>
                <option value="D">Diestro</option>
                <option value="Z">Zurdo</option>
              </Form.Select>
            </div>

            <div className="container-select">
              <label htmlFor="genero">Genero: </label>
              <Form.Select
                className="select"
                onChange={(e) => setSexo(e.target.value)}
                name="sexo"
                value={sexo}
              >
                <option>Ver Opciones</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </Form.Select>
            </div>
          </div>
          <div className="input two-option">
            <div className="input">
              <label htmlFor="torneo">Torneo: </label>
              <Form.Select
                aria-label="Default select example"
                className="select"
                onChange={(e) => setTorneo_id(e.target.value)}
                name="torneo_id"
                value={torneo_id}
              >
                {torneos.map((torneo) => (
                  <option key={torneo.id.toString()} value={torneo.id}>
                    {torneo.nombre}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className="input">
              <label htmlFor="torneo">Categoria: </label>
              <Form.Select
                aria-label="Default select example"
                className="select"
                onChange={(e) => setCategoria_id(e.target.value)}
                name="torneo_id"
                value={categoria_id}
              >
                {categorias.map((categoria) => (
                  <option key={categoria.id.toString()} value={categoria.id}>
                    {categoria.nombre}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
          <Button
            variant="primary"
            className="btn-register"
            onClick={() => validar()}
          >
            <IoSaveSharp />
            &nbsp; Guardar
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button id="cancelar" variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShowPlayers;
