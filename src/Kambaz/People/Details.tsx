// File: src/Kambaz/People/Details.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as client from "../Account/client";

export default function PeopleDetails({ refresh }: { refresh?: () => void }) {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!uid) return;
      const u = await client.findUserById(uid);
      setUser(u);
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
      <div className="text-center mb-3">
        <div className="fs-5 fw-semibold">
          {user.firstName} {user.lastName}
        </div>
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
