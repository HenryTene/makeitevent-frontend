import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Navbar,
  FormControl,
} from "react-bootstrap";

import imagen from "../../Images/makeitevent2.png";

export default function Barra() {
  return (
    <Navbar bg="light" expand="lg">      
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            alt=""
            src={imagen}
            width="150"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="primary">Buscar</Button>
        </Form>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="Organizacion" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Ayuda" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
        <Button variant="danger">Crear un evento</Button>
        <Nav.Link href="#link">Iniciar Sesion</Nav.Link>
      </Container>
    </Navbar>
  );
}
