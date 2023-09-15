import { Badge } from "react-bootstrap";

export default function BadgesCompo() {
  return (
    <>
      <div>
        <h1>
          Example heading{" "}
          <Badge pill bg="primary">
            New
          </Badge>
        </h1>
        <h2>
          Example heading{" "}
          <Badge pill bg="secondary">
            New
          </Badge>
        </h2>
        <h3>
          Example heading <Badge bg="success">New</Badge>
        </h3>
        <h4>
          Example heading <Badge bg="danger">New</Badge>
        </h4>
        <h5>
          Example heading <Badge bg="warning">New</Badge>
        </h5>
        <h6>
          Example heading <Badge bg="info">New</Badge>
        </h6>
        <h6>
          Example heading <Badge bg="light">New</Badge>
        </h6>
        <h6>
          Example heading <Badge bg="dark">New</Badge>
        </h6>
      </div>
    </>
  );
}
