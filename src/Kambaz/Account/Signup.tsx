// src/Kambaz/Account/Signup.tsx
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState({ loginId: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signupHandler = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kambaz/Account/Profile");
    } catch (err: any) {
      // show the server’s error message (e.g. "LoginId already in use")
      alert(err.response?.data?.message || "Error signing up");
    }
  };

  return (
    <div className="wd-signup-screen p-4 wd-main-content-offset">
      <h1>Sign up</h1>
      <Form.Group className="mb-2">
        <Form.Control
          id="wd-loginid"
          placeholder="loginId"
          value={user.loginId}
          onChange={(e) =>
            setUser({ ...user, loginId: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          id="wd-password"
          type="password"
          placeholder="password"
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />
      </Form.Group>
      <Button id="wd-signup-btn" onClick={signupHandler} className="w-100">
        Sign up
      </Button>
      <div className="mt-3">
        <Link to="/Kambaz/Account/Signin" className="wd-signin-link">
          Sign in
        </Link>
      </div>
    </div>
  );
}
