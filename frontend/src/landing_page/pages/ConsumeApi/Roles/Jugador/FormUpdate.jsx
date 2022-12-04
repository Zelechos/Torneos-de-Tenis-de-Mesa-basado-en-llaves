import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function FormUpdate({ show, handleClose }) {
  const [mensaje, setMensaje] = useState("");
  const [player, setPlayer] = useState({
    altura: 0,
    apellidos: "",
    fecha_nacimiento: "",
    mano_habil: "",
    nacionalidad: "",
    peso: 0,
    sexo: "",
    nombre: "",
    ranking: 0,
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      };

      fetch("http://localhost:9090/api/jugador/add", requestInit)
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
      setMensaje("Se registro el Jugador");
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
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
                  autocomplete="false"
                  value={player.nombre}
                />
              </div>
              <div className="input">
                <label htmlFor="apellidos">Apellidos: </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="apellidos"
                  autocomplete="false"
                  value={player.apellidos}
                />
              </div>

              <div className="input">
                <label htmlFor="nacionalidad">Nacionalidad: </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="nacionalidad"
                  autocomplete="false"
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
                    autocomplete="false"
                    value={player.fecha_nacimiento}
                  />
                </div>
                <div>
                  <label htmlFor="ranking">Ranking: </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="ranking"
                    autocomplete="false"
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
                    autocomplete="false"
                    value={player.altura}
                  />
                </div>
                <div>
                  <label htmlFor="peso">Peso (Kg): </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="peso"
                    autocomplete="false"
                    value={player.peso}
                  />
                </div>
              </div>

              <div className="input two-option">
                <div className="container-select">
                  <label htmlFor="skilled-hand">Mano Habil: </label>
                  <Form.Select
                    aria-label="Default select example"
                    className="select"
                    onChange={handleChange}
                    name="mano_habil"
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
                    aria-label="Default select example"
                    className="select"
                    onChange={handleChange}
                    name="sexo"
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
