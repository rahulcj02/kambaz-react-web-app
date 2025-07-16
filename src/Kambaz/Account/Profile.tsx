// src/Kambaz/Account/Profile.tsx
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  const nav = useNavigate();
  const onSignout = () => nav("/Kambaz/Account/Signin");

  return (
    <div id="wd-profile-screen" className="p-4 wd-main-content-offset">
      <h1>Profile</h1>
      <Form>
        <Form.Control
          placeholder="alice"
          defaultValue="alice"
          className="mb-2"
        />
        <Form.Control
          type="password"
          placeholder="123"
          defaultValue="123"
          className="mb-2"
        />
        <Form.Control
          placeholder="Alice"
          defaultValue="Alice"
          className="mb-2"
        />
        <Form.Control
          placeholder="Wonderland"
          defaultValue="Wonderland"
          className="mb-2"
        />
        <Form.Control
          type="date"
          className="mb-2"
          defaultValue="2000-01-01"
        />
        <Form.Control
          type="email"
          placeholder="alice@wonderland.com"
          defaultValue="alice@wonderland.com"
          className="mb-2"
        />
        <Form.Control
          placeholder="User"
          defaultValue="User"
          className="mb-2"
        />
        <Button
          id="wd-signout-btn"
          variant="danger"
          className="w-100"
          onClick={onSignout}
        >
          Signout
        </Button>
      </Form>
    </div>
  );
}
