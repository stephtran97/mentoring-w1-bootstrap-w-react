import { Col, Container, Row, Stack, Button, Form } from "react-bootstrap";

export default function ExampleLayout() {
  return (
    <div id="layout-example">
      <h4 className="text-danger">1. Grid Example</h4>
      <Container className="my-3">
        <Row>
          <Col>1 of 3</Col>
          <Col md={8}>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col md={6}>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <h5 className="text-center text-primary">Various width size</h5>
      <Container fluid="md" className="my-3">
        <Row className="justify-content-sm-center">
          <Col md={8} lg="2">
            1 of 3
          </Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container>
      <h5 className="text-center text-primary">Ordering Example</h5>
      <Container className="my-3">
        <Row>
          <Col md>First, but unordered</Col>
          <Col md={{ order: "last" }}>Second, but last</Col>
          <Col md={{ order: "first" }}>Third, but first</Col>
        </Row>
      </Container>
      <h5 className="text-center text-primary">Offsetting Example</h5>
      <Container className="my-3">
        <Row>
          <Col md={4}>md=4</Col>
          <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
          <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
        </Row>
      </Container>
      <h5 className="text-center text-primary">Row width Example</h5>
      <Container className="my-3">
        <Row xs={2} md={4} lg={6}>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row xs={1} md={2}>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row xs="auto">
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Container className="my-3">
        <Row md={4}>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <h4 className="text-danger">2. Stack Example</h4>
      <h5 className="text-center text-primary">Vertical stack</h5>
      <Stack gap={3}>
        <div className="p-2">First item</div>
        <div className="p-2">Second item</div>
        <div className="p-2">Third item</div>
      </Stack>
      <h5 className="text-center text-primary">Horizontal stack</h5>
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">First item</div>
        <div className="p-2 me-auto">Second item</div>
        <div className="p-2">Third item</div>
      </Stack>
      <Stack gap={2} className="col-md-5 mx-auto">
        <Button variant="secondary">Save changes</Button>
        <Button variant="outline-secondary">Cancel</Button>
      </Stack>
      <Stack direction="horizontal" gap={3}>
        <Form.Control className="me-auto" placeholder="Add your item here..." />
        <Button variant="secondary">Submit</Button>
        <div className="vr" />
        <Button variant="outline-danger">Reset</Button>
      </Stack>
    </div>
  );
}
