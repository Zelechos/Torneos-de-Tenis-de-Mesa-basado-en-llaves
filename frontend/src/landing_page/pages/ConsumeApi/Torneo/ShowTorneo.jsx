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

const ShowTournament = () => {
  const [id, setId] = useState(0);
  const [torneos, setTorneos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha_inicio, setFecha_inicio] = useState("");
  const [fecha_final, setFecha_final] = useState("");
  const [lugar, setLugar] = useState("");
  const [sede, setSede] = useState("");
  const [modalidad_id, setModalida_id] = useState(0);
  // tipo de funcion a realizar
  const [operation, setOperation] = useState(1);
  // titulo del modal
  const [title, setTitle] = useState("");
  let nroTorneo = 0;
  const fechaHoy = new Date();

  // MODAL
  const [show, setShow] = useState(false);
  const [modalidades, setModalidades] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getTorneos();
    getModalidad();
  }, []);

  // GET Torneos
  const getTorneos = async () => {
    const respuesta = await axios.get(
      "https://spring-370801.wn.r.appspot.com/api/torneo/mostrar"
    );
    setTorneos(respuesta.data);
  };

  // GET Modalidad
  const getModalidad = async () => {
    const respuesta = await axios.get(
      "https://spring-370801.wn.r.appspot.com/api/categoria/mostrar"
    );
    setModalidades(respuesta.data);
  };

  //Operaciones
  const openModal = (
    operacion,
    id,
    nombre,
    descripcion,
    fecha_inicio,
    fecha_final,
    lugar,
    sede,
    modalidad_id
  ) => {
    setNombre("");
    setDescripcion("");
    setFecha_inicio("");
    setFecha_final("");
    setLugar("");
    setSede("");
    setModalida_id(0);

    if (operacion === 1) {
      setTitle("Registrar Torneo");
      setOperation(1);
    }
    if (operacion === 2) {
      setTitle("Editar Torneo");
      setOperation(2);
      setNombre(nombre);
      setDescripcion(descripcion);
      setFecha_inicio(fecha_inicio);
      setFecha_final(fecha_final);
      setLugar(lugar);
      setSede(sede);
      setModalida_id(modalidad_id);
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
      show_alert("Ingrese el nombre del Torneo", "warning");
    else if (descripcion.trim() === "")
      show_alert("Ingrese una descripcion corta del Torneo", "warning");
    else if (lugar.trim() === "")
      show_alert("Ingrese el lugar del Torneo", "warning");
    else if (sede.trim() === "")
      show_alert("Ingrese la sede del Torneo", "warning");
    else if (isNaN(Date.parse(fecha_inicio)))
      show_alert("Ingrese la Fecha de inicio", "warning");
    else if (isNaN(Date.parse(fecha_final)))
      show_alert("Ingrese la Fecha Final", "warning");
    else {
      if (operation === 1) {
        parametros = {
          nombre: nombre.trim(),
          descripcion: descripcion.trim(),
          setFecha_inicio: setFecha_inicio,
          fecha_final: fecha_final,
          lugar: lugar.trim(),
          sede: sede.trim(),
          modalidad_id: modalidad_id,
        };
        metodo = "POST";
        url = "https://spring-370801.wn.r.appspot.com/api/torneo/add";
      } else {
        parametros = {
          nombre: nombre.trim(),
          descripcion: descripcion.trim(),
          setFecha_inicio: setFecha_inicio,
          fecha_final: fecha_final,
          lugar: lugar.trim(),
          sede: sede.trim(),
          modalidad_id: modalidad_id,
        };
        metodo = "PUT";
        url = "https://spring-370801.wn.r.appspot.com/api/torneo/" + id;
      }
      enviarSolicitud(metodo, parametros, url);
    }
  };

  // Peticiones
  const enviarSolicitud = async (metodo, parametros, url) => {
    if (metodo === "DELETE") {
      await axios({ method: metodo, url, data: parametros })
        .then(function (response) {
          getTorneos();
        })
        .catch(function (error) {
          show_alert("Error en la Solicitud", "error");
        });
    } else {
      await axios({ method: metodo, url, data: parametros })
        .then(function (response) {
          if (metodo === "POST") show_alert("Torneo Registrado", "success");
          if (metodo === "PUT") show_alert("Se actualizo el Torneo", "success");
          document.getElementById("cancelar").click();
          getTorneos();
        })
        .catch(function (error) {
          show_alert("Error en la Solicitud", "error");
        });
    }
  };

  // Eliminar Torneo
  const deleteTorneo = (id, nombre) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "¿Seguro desea eliminar el Torneo " + nombre + "?",
      icon: "question",
      text: "No se podra marcha atras",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        show_alert("Se elimino el Torneo", "success");
        enviarSolicitud(
          "DELETE",
          {},
          "https://spring-370801.wn.r.appspot.com/api/torneo/" + id
        );
      } else {
        show_alert("El Torneo NO fue eliminado", "info");
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
              <IoAddCircle /> &nbsp; Registrar Nuevo Torneo
            </Button>
          </div>
          <div className="container-title">
            <h1>Torneos Registrados</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-ig-8 offset-0 offset-lg-0">
            <div className="table-responsive">
              <Table striped bordered hover variant="dark" className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>NOMBRE</th>
                    <th>DESCRIPCION</th>
                    <th>FECHA INICIO(años)</th>
                    <th>FECHA FINAL</th>
                    <th>OPCIONES</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {torneos.map((torneo) => (
                    <tr key={torneo.id}>
                      <td>{(nroTorneo = nroTorneo + 1)}</td>
                      <td>{torneo.nombre}</td>
                      <td>{torneo.descripcion}</td>
                      <td>{torneo.fecha_inicio}</td>
                      <td>{torneo.fecha_final}</td>
                      <td>
                        <div className="options-buttons">
                          <Button
                            variant="danger"
                            onClick={() => {
                              deleteTorneo(torneo.id, torneo.nombre);
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
                                setId(torneo.id),
                                torneo.nombre,
                                torneo.descripcion,
                                torneo.fecha_inicio,
                                torneo.fecha_final,
                                torneo.lugar,
                                torneo.sede,
                                torneo.modalidad_id
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
            <label htmlFor="nombres">Nombre: </label>
            <input
              type="text"
              id="nombre"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="descripcion">Decripcion Corta: </label>
            <input
              type="text"
              id="descripcion"
              className="form-control"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div className="input two-option">
            <div className="input">
              <label htmlFor="fecha_inicio">Fecha de Inicio</label>
              <input
                type="date"
                id="fecha_inicio"
                className="form-control"
                value={fecha_inicio}
                onChange={(e) => setFecha_inicio(e.target.value)}
                min={
                  fechaHoy.getFullYear() +
                  `-` +
                  (fechaHoy.getMonth() + 1) +
                  `-` +
                  (fechaHoy.getDate() > 9
                    ? fechaHoy.getDate()
                    : `0` + fechaHoy.getDate())
                }
              />
            </div>
            <div className="input">
              <label htmlFor="fecha_final">Fecha de Conclusion</label>
              <input
                type="date"
                id="fecha_final"
                className="form-control"
                value={fecha_final}
                onChange={(e) => setFecha_final(e.target.value)}
                min={
                  fechaHoy.getFullYear() +
                  `-` +
                  (fechaHoy.getMonth() + 1) +
                  `-` +
                  (fechaHoy.getDate() > 9
                    ? fechaHoy.getDate()
                    : `0` + fechaHoy.getDate())
                }
              />
            </div>
          </div>
          <div className="input two-option">
            <div className="input">
              <label htmlFor="lugar">Lugar: </label>
              <input
                type="text"
                id="lugar"
                className="form-control"
                value={lugar}
                onChange={(e) => setLugar(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="sede">Sede: </label>
              <input
                type="text"
                id="sede"
                className="form-control"
                value={sede}
                onChange={(e) => setSede(e.target.value)}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor="modalidad">Modalidad: </label>
            <Form.Select
              aria-label="Default select example"
              className="select"
              onChange={(e) => setModalida_id(e.target.value)}
              name="modalidad"
              value={modalidad_id}
            >
              {modalidades.map((modalidad) => (
                <option key={modalidad.id.toString()} value={modalidad.id}>
                  {modalidad.nombre}
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

export default ShowTournament;
