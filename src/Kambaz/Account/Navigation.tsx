// File: src/Kambaz/Account/Navigation.tsx
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import { type RootState } from "../store";
import "../styles.css";

export default function AccountNavigation() {
  const currentUser = useSelector((state: RootState) => state.account.currentUser);
  const isAdmin = !!currentUser && String(currentUser.role).toUpperCase() === "ADMIN";

  useLocation();

  const links = currentUser
    ? [
        ...(isAdmin
          ? [{ to: "/Kambaz/Account/Users", label: "Users", id: "wd-account-users-link" }]
          : []),
        { to: "/Kambaz/Account/Profile", label: "Profile", id: "wd-account-profile-link" },
      ]
    : [
        { to: "/Kambaz/Account/Signin", label: "Signin", id: "wd-account-signin-link" },
        { to: "/Kambaz/Account/Signup", label: "Signup", id: "wd-account-signup-link" },
      ];

  return (
    <Nav variant="pills" className="flex-column">
      {links.map(({ to, label, id }) => (
        <Nav.Item key={label}>
          <Nav.Link as={NavLink} to={to} id={id} className="text-danger" end>
            {label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
