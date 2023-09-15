import { ListGroup } from "react-bootstrap";

export default function ListGroupsCompo() {
  return (
    <>
      <ListGroup numbered>
        <ListGroup.Item active action href="#">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action variant="danger">
          Button
        </ListGroup.Item>
        <ListGroup.Item action href="#" disabled>
          Link but disabled
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
