// src/Kambaz/Account/Signin.tsx
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  const nav = useNavigate();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nav("/Kambaz/Account/Profile");
  };

  return (
    <div id="wd-signin-screen" className="p-4 wd-main-content-offset">
      <h1>Sign in</h1>
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
          id="wd-signin-btn"
          type="submit"
          className="btn btn-primary w-100 mb-2"
        >
          Signin
        </Button>
      </Form>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
        Signup
      </Link>
    </div>
  );
}
