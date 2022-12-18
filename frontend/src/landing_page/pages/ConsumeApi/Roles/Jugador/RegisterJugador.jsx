import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { IoSaveSharp } from "react-icons/io5";
function RegisterJugador({
  show,
  handleClose,
  title,
  nombre,
  setNombre,
  apellidos,
  setApellidos,
  nacionalidad,
  setNacionalidad,
  fecha_nacimiento,
  setFechaNacimiento,
  ranking,
  setRanking,
  altura,
  setAltura,
  peso,
  setPeso,
  mano_habil,
  setMano_habil,
  sexo,
  setSexo,
  torneos,
  categorias,
  torneo_id,
  setTorneo_id,
  categoria_id,
  setCategoria_id,
}) {
  return (
    <Modal show={show} onHide={handleClose} className="modal">
      <section className="form">
        <Modal.Header>
          <Modal.Title>Titulo{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input">
            <label htmlFor="nombre">Nombres:</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="apellidos">Apellidos:</label>
            <input
              type="text"
              className="form-control"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="nacionalidad">Nacionalidad:</label>
            <input
              type="text"
              className="form-control"
              value={nacionalidad}
              onChange={(e) => setNacionalidad(e.target.value)}
            />
          </div>
          <div className="input two-option">
            <div className="input">
              <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
              <input
                type="date"
                className="form-control"
                value={fecha_nacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
                min="1900-01-01"
                max="2001-12-31"
              />
            </div>
            <div className="input">
              <label htmlFor="ranking">Ranking:</label>
              <input
                type="number"
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
              <label htmlFor="altura">Altura (cm):</label>
              <input
                type="number"
                className="form-control"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                min="130"
                max="220"
              />
            </div>
            <div className="input">
              <label htmlFor="peso">Peso (kg):</label>
              <input
                type="number"
                className="form-control"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                min="40"
                max="120"
              />
            </div>
          </div>

          <div className="input two-option">
            <div className="container-select">
              <label htmlFor="skilled-hand">Mano Habil: </label>
              <Form.Select
                className="select"
                onChange={(e) => setMano_habil(e.target.value)}
                name="mano_habil"
                value={mano_habil}
              >
                <option value="">Ver opciones</option>
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
                <option value="">Ver opciones</option>
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
          <Button variant="primary" className="btn-register">
            <IoSaveSharp />
            &nbsp; Guardar
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </section>
    </Modal>
  );
}

export default RegisterJugador;
