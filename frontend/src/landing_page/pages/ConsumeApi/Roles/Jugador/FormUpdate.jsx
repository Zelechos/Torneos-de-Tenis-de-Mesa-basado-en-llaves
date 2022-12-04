import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ModalAlert from "../../Modal";

function FormUpdate({ show, handleClose, jugador }) {
  const [mensaje, setMensaje] = useState("");

  const [player, setPlayer] = useState({
    altura: "",
    apellidos: "",
    fecha_nacimiento: "",
    mano_habil: "",
    nacionalidad: "",
    peso: "",
    sexo: "",
    nombre: "",
    ranking: "",
  });

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  // POST
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar datos
    if (
      player.nombre === "" ||
      player.apellidos === "" ||
      player.nacionalidad === "" ||
      player.sexo === "" ||
      player.mano_habil === "" ||
      parseFloat(player.peso) <= 0 ||
      parseInt(player.altura) <= 0 ||
      parseInt(player.ranking) < 0
    ) {
      setMensaje("Todos los campos deben ser llenados");
    } else {
      // consulta
      const requestInit = {
        method: "UPDATE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      };

      fetch("http://localhost:9090/api/jugador/" + player.id, requestInit)
        .then((respuesta) => respuesta.json())
        .then((respuesta) => console.log(respuesta));

      // reiniciando state del jugador
      setPlayer({
        altura: 0,
        apellidos: "",
        fecha_nacimiento: "",
        mano_habil: "",
        nacionalidad: "",
        peso: 0.0,
        sexo: "",
        nombre: "",
        ranking: 0,
      });
      setMensaje("Se actualizaron los datos");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Editar Datos</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className="main form-update" onSubmit={handleSubmit}>
            <div>
              <div className="input">
                <label htmlFor="nombre">Nombres: </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="nombre"
                  placeholder={jugador.nombre}
                  value={player.nombre}
                />
              </div>
              <div className="input">
                <label htmlFor="apellidos">Apellidos: </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="apellidos"
                  placeholder={jugador.apellidos}
                  value={player.apellidos}
                />
              </div>

              <div className="input">
                <label htmlFor="nacionalidad">Nacionalidad: </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="nacionalidad"
                  placeholder={jugador.nacionalidad}
                  value={player.nacionalidad}
                />
              </div>

              <div className="input two-option">
                <div className="label-fecha">
                  <label htmlFor="fecha_nacimiento">Fecha Nacimiento:</label>
                  <input
                    onChange={handleChange}
                    type="date"
                    name="fecha_nacimiento"
                    placeholder={jugador.fecha_nacimiento}
                    value={player.fecha_nacimiento}
                  />
                </div>
                <div>
                  <label htmlFor="ranking">Ranking: </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="ranking"
                    placeholder={jugador.ranking}
                    value={player.ranking}
                  />
                </div>
              </div>

              <div className="input two-option">
                <div>
                  <label htmlFor="altura">Altura (cm): </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="altura"
                    placeholder={jugador.altura}
                    value={player.altura}
                  />
                </div>
                <div>
                  <label htmlFor="peso">Peso (Kg): </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="peso"
                    placeholder={jugador.peso}
                    value={player.peso}
                  />
                </div>
              </div>

              <div className="input two-option">
                <div className="container-select">
                  <label htmlFor="skilled-hand">Mano Habil: </label>
                  <Form.Select
                    className="select"
                    onChange={handleChange}
                    name="mano_habil"
                    placeholder={jugador.mano_habil}
                    value={player.mano_habil}
                  >
                    <option value="">Ver opciones</option>
                    <option value="D">Diestro</option>
                    <option value="Z">Zurdo</option>
                    <option value="A">Ambos</option>
                  </Form.Select>
                </div>

                <div className="container-select">
                  <label htmlFor="genro">Genero: </label>
                  <Form.Select
                    className="select"
                    onChange={handleChange}
                    name="sexo"
                    onSelect={jugador.sexo}
                    value={player.sexo}
                  >
                    <option value="">Ver opciones</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                  </Form.Select>
                </div>
              </div>
              <button className="btn-register" type="submit">
                Guardar Cambios
              </button>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormUpdate;
