import { Card, Button } from "react-bootstrap";

export default function BootstrapCards() {
  return (
    <div id="wd-bs-cards" className="mb-4">
      <h3>Cards</h3>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/images/teslabot.jpg" />
        <Card.Body>
          <Card.Title>Stacking Starship</Card.Title>
          <Card.Text>
            A shining example of Web Dev.
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
