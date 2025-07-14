// src/Kambaz/Account/index.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AccountNavigation from "./Navigation";
import Signin            from "./Signin";
import Signup            from "./Signup";
import Profile           from "./Profile";
import "../styles.css";

export default function Account() {
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
                <Route index element={<Navigate to="Signin" replace />} />
                <Route path="Signin"  element={<Signin />} />
                <Route path="Signup"  element={<Signup />} />
                <Route path="Profile" element={<Profile />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}