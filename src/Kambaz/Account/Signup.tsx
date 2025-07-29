// File: src/Kambaz/Account/Signup.tsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useNavigate } from "react-router-dom";
import { FormControl, Button } from "react-bootstrap";
import type { User } from "./reducer";

export default function Signup() {
  const [form, setForm] = useState({
    loginId: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "Student",
  });
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onSignup = () => {
    const newUser: User = {
      _id: Date.now().toString(),
      firstName: form.firstName,
      lastName: form.lastName,
      loginId: form.loginId,
      password: form.password,
      section: "",          
      role: form.role,     
      lastActivity: "",     
      totalActivity: "",    
    };

    dispatch(setCurrentUser(newUser));
    nav("/Kambaz/Dashboard");
  };

  return (
    <div className="p-4 wd-main-content-offset" id="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl
        id="wd-signup-loginId"
        placeholder="Login ID"
        className="mb-2"
        value={form.loginId}
        onChange={(e) => setForm({ ...form, loginId: e.target.value })}
      />
      <FormControl
        id="wd-signup-password"
        type="password"
        placeholder="Password"
        className="mb-2"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <FormControl
        id="wd-signup-firstName"
        placeholder="First Name"
        className="mb-2"
        value={form.firstName}
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />
      <FormControl
        id="wd-signup-lastName"
        placeholder="Last Name"
        className="mb-2"
        value={form.lastName}
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
      />
      <Button
        id="wd-signup-btn"
        onClick={onSignup}
        className="w-100"
        variant="primary"
      >
        Sign up
      </Button>
    </div>
  );
}
