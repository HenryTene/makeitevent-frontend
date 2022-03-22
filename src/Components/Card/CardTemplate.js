import { Card, Button } from "react-bootstrap";
import event1 from "../../Images/event1.jpg";

export default function CardTemplate() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={event1} />
      <Card.Body>
        <Card.Title>Evento 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>Instructor:Luis</Card.Text>
        <Card.Text>
          <a href="#" className="stretched-link">
            Mas detalles...
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
