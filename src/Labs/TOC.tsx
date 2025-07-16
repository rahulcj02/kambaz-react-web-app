// File: src/Kambaz/Labs/TOC.tsx
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/Labs/Lab1"
          active={true}       
        >
          Lab 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/Labs/Lab2"
          active={true}        // ← always highlighted
        >
          Lab 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/Labs/Lab3"
          active={true}        // ← always highlighted
        >
          Lab 3
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/Kambaz"
          active={true}        // ← always highlighted
        >
          Kambaz
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="https://github.com/rahulcj02"
          active={true}        // ← always highlighted
        >
          My GitHub
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
