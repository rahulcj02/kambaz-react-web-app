// File: src/Kambaz/Account/Profile.tsx
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // grab the signed-in user from Redux
  const currentUser = useSelector(
    (state: RootState) => state.account.currentUser
  );

  // local copy for editing
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

  // on mount, ensure we're signed in, then seed form
  useEffect(() => {
    if (!currentUser) {
      navigate("/Kambaz/Account/Signin", { replace: true });
    } else {
      setProfile(currentUser);
    }
  }, [currentUser, navigate]);

  // clear user and go back to signin
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin", { replace: true });
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
          <Form.Control
            type="text"
            value={profile.lastActivity}
            readOnly
          />
        </Form.Group>

        {/* Total Activity (read-only) */}
        <Form.Group controlId="wd-total-activity" className="mb-4">
          <Form.Label>Total Activity</Form.Label>
          <Form.Control
            type="text"
            value={profile.totalActivity}
            readOnly
          />
        </Form.Group>

        <Button
          id="wd-signout-btn"
          variant="danger"
          className="w-100"
          onClick={signout}
        >
          Sign Out
        </Button>
      </Form>
    </div>
  );
}
