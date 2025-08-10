// File: src/Kambaz/People/Table.tsx
import React from "react";
import { Link } from "react-router-dom";
import PeopleDetails from "./Details";

type User = {
  _id: string;
  firstName?: string;
  lastName?: string;
  loginId?: string;
  section?: string;
  role?: string;
  lastActivity?: string | Date;
  totalActivity?: string;
};

export default function PeopleTable({
  users = [],
  refresh,
}: {
  users?: User[];
  refresh?: () => void;
}) {
  return (
    <div id="wd-people-table" className="p-3">
      <PeopleDetails refresh={refresh} />
      <h2 className="text-danger">People</h2>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link
                  to={`/Kambaz/Account/Users/${user._id}`}
                  className="text-decoration-none"
                >
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{String(user.lastActivity ?? "")}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
