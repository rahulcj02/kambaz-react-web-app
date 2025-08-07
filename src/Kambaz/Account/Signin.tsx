// src/Kambaz/Account/Signin.tsx
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    loginId: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    const user = await client.signin(credentials);
    if (user) {
      dispatch(setCurrentUser(user));
      navigate("/Kambaz/Dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div id="wd-signin-screen" className="p-4 wd-main-content-offset">
      <h1>Sign in</h1>
      <Form.Group className="mb-2">
        <Form.Control
          id="wd-loginid"
          placeholder="loginId"
          value={credentials.loginId}
          onChange={(e) =>
            setCredentials({ ...credentials, loginId: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          id="wd-password"
          type="password"
          placeholder="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </Form.Group>
      <Button id="wd-signin-btn" onClick={signin} className="w-100">
        Sign In
      </Button>
    </div>
  );
}
