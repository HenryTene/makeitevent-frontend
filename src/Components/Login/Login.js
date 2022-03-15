import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {Image} from 'react-bootstrap';

export default function Login() {
        return(

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
                <Image className="class-img" src="./images/event1.jpg" alt=""/>
              </Col>
            </Row>
          </Container>

        );

}
