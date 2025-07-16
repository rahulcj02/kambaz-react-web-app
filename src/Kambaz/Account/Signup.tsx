// src/Kambaz/Account/Signup.tsx
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  const nav = useNavigate();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nav("/Kambaz/Account/Profile");
  };

  return (
    <div id="wd-signup-screen" className="p-4 wd-main-content-offset">
      <h1>Signup</h1>
      <Form onSubmit={onSubmit}>
        <Form.Control
          id="wd-username"
          placeholder="username"
          className="mb-2"
        />
        <Form.Control
          id="wd-password"
          type="password"
          placeholder="password"
          className="mb-2"
        />
        <Button
          id="wd-signup-btn"
          type="submit"
          className="btn btn-primary w-100 mb-2"
        >
          Signup
        </Button>
      </Form>
      <Link id="wd-signin-link" to="/Kambaz/Account/Signin">
        Signin
      </Link>
    </div>
  );
}
