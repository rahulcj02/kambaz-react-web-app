// File: src/Kambaz/Account/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { type RootState } from "../store";
import AccountNavigation from "./Navigation";
import Signin            from "./Signin";
import Signup            from "./Signup";
import Profile           from "./Profile";
import Users             from "./Users";
import "../styles.css";

export default function Account() {
  const currentUser = useSelector(
    (state: RootState) => state.account.currentUser
  );

  const defaultRoute = currentUser ? "Profile" : "Signin";

  return (
    <div id="wd-account-screen">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route
                  index
                  element={<Navigate to={defaultRoute} replace />}
                />
                <Route path="Signin"  element={<Signin  />} />
                <Route path="Signup"  element={<Signup  />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="Users"   element={<Users   />} />
                <Route path="Users/:uid" element={<Users />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
