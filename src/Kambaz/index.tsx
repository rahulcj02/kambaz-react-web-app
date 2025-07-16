// src/Kambaz/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles.css";
import KambazNavigation from "./Navigation";
import Account          from "./Account";
import Dashboard        from "./Dashboard";
import Courses          from "./Courses";
import Calendar         from "./Calendar";
import Inbox            from "./Inbox";
import Settings         from "./Settings";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <KambazNavigation />
            </td>
            <td valign="top" className="wd-main-content-offset">
              <Routes>
                <Route index element={<Navigate to="Account" replace />} />
                <Route path="Account/*" element={<Account />} />
                <Route path="Dashboard" element={<Dashboard />} />
                {/* capture courseId for nested Courses */}
                <Route path="Courses/:courseId/*" element={<Courses />} />
                <Route path="Calendar" element={<Calendar />} />
                <Route path="Inbox" element={<Inbox />} />
                <Route path="Settings" element={<Settings />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}