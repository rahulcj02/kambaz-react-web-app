// File: src/Kambaz/People/Details.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaPencil, FaCheck } from "react-icons/fa6";
import * as client from "../Account/client";

export default function PeopleDetails({ refresh }: { refresh?: () => void }) {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<any | null>(null);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const load = async () => {
      if (!uid) return;
      const u = await client.findUserById(uid);
      setUser(u);
      setName(`${u?.firstName ?? ""} ${u?.lastName ?? ""}`.trim());
    };
    load();
  }, [uid]);

  if (!uid || !user) return null;

  const onCancel = () => navigate("/Kambaz/Account/Users");

  const onDelete = async () => {
    await client.deleteUser(uid);
    if (refresh) await refresh();
    navigate("/Kambaz/Account/Users");
  };

  const saveUser = async () => {
    const [firstName, ...rest] = name.trim().split(/\s+/);
    const lastName = rest.join(" ");
    const updated = { ...user, firstName, lastName };
    const saved = await client.updateUser(updated);
    setUser(saved);
    setEditing(false);
    if (refresh) await refresh();
    navigate(-1);
  };

  return (
    <div
      className="position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow"
      style={{ width: 360, zIndex: 1050 }}
    >
      <button
        onClick={onCancel}
        className="btn-close position-absolute top-0 end-0 m-2"
        aria-label="Close"
      />

      <div className="text-danger fs-4">
        {editing ? (
          <FaCheck onClick={saveUser} className="float-end fs-5 mt-2 ms-2 wd-save" />
        ) : (
          <FaPencil onClick={() => setEditing(true)} className="float-end fs-5 mt-2 ms-2 wd-edit" />
        )}
      </div>

      <div className="text-center mb-3">
        {!editing && (
          <div className="fs-5 fw-semibold" onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}
          </div>
        )}
        {editing && (
          <input
            className="form-control w-75 mx-auto"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveUser();
            }}
          />
        )}
      </div>

      <div className="small">
        <div className="mb-2"><b>Role:</b> <span>{user.role}</span></div>
        <div className="mb-2"><b>Login ID:</b> <span>{user.loginId}</span></div>
        <div className="mb-2"><b>Section:</b> <span>{user.section}</span></div>
        <div className="mb-2"><b>Total Activity:</b> <span>{user.totalActivity}</span></div>
        <div className="mb-2"><b>Last Activity:</b> <span>{String(user.lastActivity ?? "")}</span></div>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <button onClick={onCancel} className="btn btn-secondary">Cancel</button>
        <button onClick={onDelete} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}
