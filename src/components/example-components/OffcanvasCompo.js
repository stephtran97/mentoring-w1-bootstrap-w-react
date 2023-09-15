import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

export default function OffcanvasCompo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        placement="top"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.{" "}
          <p className="text-danger">
            This content is shown normally above large breakpoint.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
