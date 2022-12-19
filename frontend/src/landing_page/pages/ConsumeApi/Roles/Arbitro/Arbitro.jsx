import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alert } from "../../funtions";
import { IoSaveSharp } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ShowReferee = () => {
  const [id, setId] = useState(0);
  const [referees, setReferees] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [experiencia_anos, setExperiencia_anos] = useState(0);
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [torneo_id, setTorneo_id] = useState(0);
  // tipo de funcion a realizar
  const [operation, setOperation] = useState(1);
  // titulo del modal
  const [title, setTitle] = useState("");
  let nroArbitros = 0;

  const [torneos, setTorneos] = useState([]);

  // MODAL
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getReferees();
    getTorneos();
  }, []);

  // GET
  const getReferees = () => {
    fetch("https://spring-370801.wn.r.appspot.com/api/arbitro/mostrar")
      .then((respuesta) => respuesta.json())
      .then((respuesta) => setReferees(respuesta));
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
    apellido,
    fecha_nacimiento,
    experiencia_anos,
    email,
    telefono,
    torneo_id
  ) => {
    setNombre("");
    setApellido("");
    setFecha_nacimiento("");
    setExperiencia_anos(0);
    setEmail("");
    setTelefono(0);
    setTorneo_id(0);

    if (operacion === 1) {
      setTitle("Registrar Arbitro");
      setOperation(1);
    }
    if (operacion === 2) {
      setTitle("Editar Arbitro");
      setOperation(2);
      setNombre(nombre);
      setApellido(apellido);
      setFecha_nacimiento(fecha_nacimiento);
      setExperiencia_anos(experiencia_anos);
      setEmail(email);
      setTelefono(telefono);
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
      show_alert("Ingrese el nombre del Arbitro", "warning");
    else if (apellido.trim() === "")
      show_alert("Ingrese los apellidos del Arbitro", "warning");
    else if (email.trim() === "") show_alert("Ingrese el email", "warning");
    else if (isNaN(Date.parse(fecha_nacimiento)))
      show_alert("Ingrese la Fecha de Nacimiento", "warning");
    else if (experiencia_anos < 1 || experiencia_anos > 50)
      show_alert("Ingrese una Experiencia de años valida", "warning");
    else if (telefono < 59999999 || telefono > 79999999)
      show_alert("Ingrese un numero de telefonos valido", "warning");
    else {
      if (operation === 1) {
        parametros = {
          nombre: nombre.trim(),
          apellido: apellido.trim(),
          fecha_nacimiento: fecha_nacimiento.trim(),
          experiencia_anos: experiencia_anos,
          email: email,
          telefono: telefono,
          torneo_id: torneo_id,
        };
        metodo = "POST";
        url = "https://spring-370801.wn.r.appspot.com/api/arbitro/add";
      } else {
        parametros = {
          nombre: nombre.trim(),
          apellido: apellido.trim(),
          fecha_nacimiento: fecha_nacimiento.trim(),
          experiencia_anos: experiencia_anos,
          email: email,
          telefono: telefono,
          torneo_id: torneo_id,
        };
        metodo = "PUT";
        url = "https://spring-370801.wn.r.appspot.com/api/arbitro/" + id;
      }
      enviarSolicitud(metodo, parametros, url);
    }
  };

  // Peticiones
  const enviarSolicitud = async (metodo, parametros, url) => {
    if (metodo === "DELETE") {
      await axios({ method: metodo, url, data: parametros })
        .then(function (response) {
          getReferees();
        })
        .catch(function (error) {
          show_alert("Error en la Solicitud", "error");
        });
    } else if (metodo === "ACREDITAR") {
      await axios({ method: "PUT", url, data: parametros })
        .then(function (response) {
          getReferees();
        })
        .catch(function (error) {
          show_alert("Error en la Solicitud", "error");
        });
    } else {
      await axios({ method: metodo, url, data: parametros })
        .then(function (response) {
          if (metodo === "POST") {
            show_alert("Arbitro Registrado", "success");
          }
          if (metodo === "PUT")
            show_alert("Se actualizo el Arbitro", "success");
          document.getElementById("cancelar").click();
          getReferees();
        })
        .catch(function (error) {
          show_alert("Error en la Solicitud", "error");
        });
    }
  };

  // Eliminar Jugador
  const deleteArbitro = (id, nombre) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "¿Seguro desea eliminar el Arbitro " + nombre + "?",
      icon: "question",
      text: "No se podra marcha atras",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        show_alert("Se elimino el Arbitro", "success");
        enviarSolicitud(
          "DELETE",
          {},
          "https://spring-370801.wn.r.appspot.com/api/arbitro/" + id
        );
      } else {
        show_alert("El Arbitro NO fue eliminado", "info");
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
      text = "El arbitro podra controlar los partidos de torneos";
      mensaje = "Arbitro " + nombre + " Acreditado";
      mensaje2 = "El arbitro NO fue acreditado";
      btnMsj = "Si, acreditar";
    } else {
      title = "¿Desacreditar al arbitro " + nombre + "?";
      text = "El arbitro ya NO podra controlar en los partidos";
      mensaje = "Arbitro " + nombre + " Desacreditado";
      mensaje2 = "El Arbitro se mantiene acreditado";
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
          "https://spring-370801.wn.r.appspot.com/api/arbitro/acreditar/" +
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
          <div>
            <Button
              variant="primary"
              className="btn-add"
              onClick={() => {
                openModal(1);
                handleShow();
              }}
            >
              <IoAddCircle /> &nbsp; Agregar Arbitros
            </Button>
          </div>
          <div className="container-title">
            <h1>Lista de Arbitros</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-ig-8 offset-0 offset-lg-0">
            <div className="table-responsive">
              <Table striped bordered hover variant="dark" className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ARBITRO</th>
                    <th>APELLIDOS</th>
                    <th>EXPERIENCIA(años)</th>
                    <th>ACREDITACION</th>
                    <th>OPCIONES</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {referees.map((referee) => (
                    <tr key={referee.id}>
                      <td>{(nroArbitros = nroArbitros + 1)}</td>
                      <td>{referee.nombre}</td>
                      <td>{referee.apellido}</td>
                      <td>{referee.experiencia_anos}</td>
                      <td>
                        <Button
                          variant={referee.acreditar ? "secondary" : "primary"}
                          onClick={() => {
                            acreditar(referee, referee.nombre);
                          }}
                        >
                          {referee.acreditar ? "Desacreditar" : "Acreditar"}
                        </Button>
                      </td>
                      <td>
                        <div className="options-buttons">
                          <Button
                            variant="danger"
                            onClick={() => {
                              deleteArbitro(referee.id, referee.nombre);
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
                                setId(referee.id),
                                referee.nombre,
                                referee.apellido,
                                referee.fecha_nacimiento,
                                referee.experiencia_anos,
                                referee.email,
                                referee.telefono,
                                referee.torneo_id
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
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
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
              <label htmlFor="experiencia">Experiencia (años): </label>
              <input
                type="number"
                id="ranking"
                className="form-control"
                value={experiencia_anos}
                onChange={(e) => setExperiencia_anos(e.target.value)}
                min="0"
                max="1000"
              />
            </div>
          </div>
          <div className="input two-option">
            <div className="input">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="altura"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                min="130"
                max="220"
              />
            </div>
            <div className="input">
              <label htmlFor="peso">Telefono: </label>
              <input
                type="number"
                id="peso"
                className="form-control"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                min="59999999"
                max="79999999"
              />
            </div>
          </div>
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

export default ShowReferee;
