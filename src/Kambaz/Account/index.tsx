// File: src/Kambaz/Account/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { type RootState } from "../store";
import AccountNavigation from "./Navigation";
import Signin            from "./Signin";
import Signup            from "./Signup";
import Profile           from "./Profile";
import "../styles.css";

export default function Account() {
  // Pull the currentUser from the account reducer
  const currentUser = useSelector(
    (state: RootState) => state.account.currentUser
  );

  // Decide default route: Profile if signed in, otherwise Signin
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
                {/* Redirect index to Signin or Profile */}
                <Route
                  index
                  element={<Navigate to={defaultRoute} replace />}
                />
                <Route path="Signin"  element={<Signin  />} />
                <Route path="Signup"  element={<Signup  />} />
                <Route path="Profile" element={<Profile />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
