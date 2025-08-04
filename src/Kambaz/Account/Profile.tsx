// File: src/Kambaz/Account/Profile.tsx
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { setCurrentUser } from "./reducer";
import * as client from "./client";      

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(
    (state: RootState) => state.account.currentUser
  );

  const [profile, setProfile] = useState({
    _id: "",
    loginId: "",
    password: "",
    firstName: "",
    lastName: "",
    section: "",
    role: "",
    lastActivity: "",
    totalActivity: "",
  });

  useEffect(() => {
    if (!currentUser) {
      navigate("/Kambaz/Account/Signin", { replace: true });
    } else {
      setProfile(currentUser);
    }
  }, [currentUser, navigate]);

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin", { replace: true });
  };

  const updateProfile = async () => {
    const updated = await client.updateUser(profile);
    dispatch(setCurrentUser(updated));
  };

  return (
    <div id="wd-profile-screen" className="p-4 wd-main-content-offset">
      <h1>Profile</h1>
      <Form>
        {/* Username */}
        <Form.Group controlId="wd-username" className="mb-2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={profile.loginId}
            onChange={(e) =>
              setProfile({ ...profile, loginId: e.target.value })
            }
          />
        </Form.Group>

        {/* Password */}
        <Form.Group controlId="wd-password" className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
        </Form.Group>

        {/* First Name */}
        <Form.Group controlId="wd-firstname" className="mb-2">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
        </Form.Group>

        {/* Last Name */}
        <Form.Group controlId="wd-lastname" className="mb-2">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
        </Form.Group>

        {/* Section */}
        <Form.Group controlId="wd-section" className="mb-2">
          <Form.Label>Section</Form.Label>
          <Form.Control
            type="text"
            value={profile.section}
            onChange={(e) =>
              setProfile({ ...profile, section: e.target.value })
            }
          />
        </Form.Group>

        {/* Role */}
        <Form.Group controlId="wd-role" className="mb-2">
          <Form.Label>Role</Form.Label>
          <Form.Select
            value={profile.role}
            onChange={(e) =>
              setProfile({ ...profile, role: e.target.value })
            }
          >
            <option value="Student">Student</option>
            <option value="TA">TA</option>
            <option value="Instructor">Instructor</option>
            <option value="Admin">Admin</option>
          </Form.Select>
        </Form.Group>

        {/* Last Activity (read-only) */}
        <Form.Group controlId="wd-last-activity" className="mb-2">
          <Form.Label>Last Activity</Form.Label>
          <Form.Control type="text" value={profile.lastActivity} readOnly />
        </Form.Group>

        {}
        <Form.Group controlId="wd-total-activity" className="mb-4">
          <Form.Label>Total Activity</Form.Label>
          <Form.Control type="text" value={profile.totalActivity} readOnly />
        </Form.Group>

        {}
        <Button
          id="wd-update-btn"
          onClick={updateProfile}
          className="btn btn-primary w-100 mb-2"
        >
          Update
        </Button>

        {}
        <Button
          id="wd-signout-btn"
          onClick={signout}
          className="wd-signout-btn btn btn-danger w-100"
        >
          Sign Out
        </Button>
      </Form>
    </div>
  );
}
