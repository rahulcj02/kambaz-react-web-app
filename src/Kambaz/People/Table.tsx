import { useParams } from "react-router-dom";
import { users, enrollments } from "../Database";

export default function PeopleTable() {
  const { courseId } = useParams<{ courseId: string }>();

  const filteredUsers = users.filter((usr: any) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === usr._id && enrollment.course === courseId
    )
  );

  return (
    <div id="wd-people-table" className="p-3">
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
          {filteredUsers.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
