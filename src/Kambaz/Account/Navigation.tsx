// File: src/Kambaz/Account/Navigation.tsx

import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../styles.css";

export default function AccountNavigation() {
  return (
    <Nav variant="pills" className="flex-column">
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/Kambaz/Account/Signin"
          id="wd-account-signin-link"
          className="text-danger"
        >
          Signin
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/Kambaz/Account/Signup"
          id="wd-account-signup-link"
          className="text-danger"
        >
          Signup
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/Kambaz/Account/Profile"
          id="wd-account-profile-link"
          className="text-danger"
        >
          Profile
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
