// src/Kambaz/Account/Navigation.tsx
import { NavLink } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-account-nav">
      <NavLink
        to="Signin"
        className={({ isActive }) =>
          "wd-nav-link" + (isActive ? " active" : "")
        }
      >
        Signin
      </NavLink>
      <NavLink
        to="Signup"
        className={({ isActive }) =>
          "wd-nav-link" + (isActive ? " active" : "")
        }
      >
        Signup
      </NavLink>
      <NavLink
        to="Profile"
        className={({ isActive }) =>
          "wd-nav-link" + (isActive ? " active" : "")
        }
      >
        Profile
      </NavLink>
    </div>
  );
}
