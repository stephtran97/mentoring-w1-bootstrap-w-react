import { Spinner, Button } from "react-bootstrap";

export default function SpinnersCompo() {
  return (
    <div className="d-flex justify-content-center">
      {" "}
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="grow" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{" "}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
}
