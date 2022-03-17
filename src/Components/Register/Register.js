import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Figure,
} from "react-bootstrap";
import { Image } from "react-bootstrap";
import event2 from "../../Images/event2.jpg";

export default function Register() {
  return (
    <Container>
      <Row>
        <br />
        <Col lg={6}>
          <Form>
            <br />
            <br />
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Text className="text-muted">MakeItEvent</Form.Text>
              <br />
              <br />
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu Password" />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Continuar
              </Button>
            </div>
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
          {/*  <Image className="class-img" src={event2} alt="" />    */}
          <br />
          <br />
          <br />

          <Figure>
            <Figure.Image
              width={1900}
              height={1900}
              alt="1900x1900"
              src={event2}
            />
            <Figure.Caption>Encuentra tu evento favorito!</Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}
