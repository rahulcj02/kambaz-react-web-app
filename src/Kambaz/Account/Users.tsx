// File: src/Kambaz/Account/Users.tsx
import { useEffect, useState } from "react";
import PeopleTable from "../People/Table";
import * as client from "./client";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const fetchUsers = async () => {
    const list = await client.findAllUsers();
    setUsers(list);
  };

  const filterUsersByRole = async (r: string) => {
    setRole(r);
    if (r) {
      const list = await client.findUsersByRole(r);
      setUsers(list);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByName = async (n: string) => {
    setName(n);
    if (n) {
      const list = await client.findUsersByPartialName(n);
      setUsers(list);
    } else {
      fetchUsers();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-3">
      <h3>Users</h3>
      <div className="d-flex gap-2 mb-3">
        <input
          value={name}
          onChange={(e) => filterUsersByName(e.target.value)}
          placeholder="Search people"
          className="form-control w-25"
        />
        <select
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
          className="form-select w-25"
        >
          <option value="">All Roles</option>
          <option value="Student">Students</option>
          <option value="TA">TAs</option>
          <option value="Faculty">Faculty</option>
          <option value="Instructor">Instructors</option>
          <option value="Admin">Administrators</option>
        </select>
      </div>
      <PeopleTable users={users} refresh={fetchUsers} />
    </div>
  );
}
