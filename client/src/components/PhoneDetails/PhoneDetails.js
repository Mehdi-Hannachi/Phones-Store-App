import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CgDetailsMore } from "react-icons/cg";

function PhoneDetails() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h3 onClick={handleShow}>
        <CgDetailsMore />
      </h3>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>More details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Component under construction </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PhoneDetails;
