import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalAlert({ show, handleClose, mensaje }) {
  return (
    <Modal show={show} onHide={handleClose} className="modal">
      <Modal.Header closeButton>
        <Modal.Title>Alerta</Modal.Title>
      </Modal.Header>
      <Modal.Body>{mensaje}</Modal.Body>
      <Modal.Footer>
        <Button variant={show ? "danger" : "primary"} onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAlert;
