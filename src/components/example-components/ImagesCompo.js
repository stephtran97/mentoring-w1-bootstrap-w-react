import { Col, Container, Image, Row } from "react-bootstrap";

export default function ImagesCompo() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={require("../example-components/img/1.jpeg")} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src={require("../example-components/img/1.jpeg")}
              roundedCircle
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src={require("../example-components/img/1.jpeg")}
              thumbnail
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
