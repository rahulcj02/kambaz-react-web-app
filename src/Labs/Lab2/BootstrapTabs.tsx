import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BootstrapTabs() {
  return (
    <div id="wd-bs-tabs" className="mb-4">
      <h3>Tabs</h3>
      <Nav variant="tabs">
        <Nav.Item><Nav.Link as={Link} to="Lab1">Lab 1</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={Link} to="Lab2">Lab 2</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={Link} to="Lab3">Lab 3</Nav.Link></Nav.Item>
      </Nav>
    </div>
  );
}
