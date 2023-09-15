import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ModalsCompoStaticBackdrop from "./ModalsCompoStaticBackdrop";

export default function ModalsCompo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <h6 className="text-center text-info">
        Static backdrop (cannot close by clicking outside modal)
      </h6>
      <ModalsCompoStaticBackdrop></ModalsCompoStaticBackdrop>
    </>
  );
}
