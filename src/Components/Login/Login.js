import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Figure } from "react-bootstrap";
import { Image } from "react-bootstrap";
import event1 from "../../Images/event1.jpg";

export default function Login() {
  return (
    <Container>
      <Row>
        <br />
        <Col lg={6}>
          <Form>
            <br />
            <br />
            <br />
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <br />
                <br />
                <Form.Text className="text-muted">Crea una cuenta.</Form.Text>
                <br />
                <br />
                <Form.Control type="email" placeholder="Email address" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Continuar
                </Button>
              </div>
            </Row>
            <br />
            <Row>
              <div className="d-grid gap-2">
                <Button variant="outline-primary">Sign up with Google</Button>{" "}
                <Button variant="outline-primary">Sign up with Facebook</Button>{" "}
                <Button variant="outline-secondary">Sign up with Apple</Button>{" "}
              </div>
            </Row>
          </Form>
        </Col>
        <Col lg={6}>
          <br />
          <br />
          <br />
          {/* <Image className="class-img" src="./images/event1.jpg" alt="" /> */}
          <Figure>
            <Figure.Image
              width={1900}
              height={1900}
              alt="1900x1900"
              src={event1}
            />
            <Figure.Caption>Encuentra tu evento favorito!</Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}
