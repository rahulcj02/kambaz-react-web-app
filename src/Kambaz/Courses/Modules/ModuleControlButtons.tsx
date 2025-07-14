// File: src/Kambaz/Courses/Modules/ModuleControlButtons.tsx
import { BsPlus, BsThreeDotsVertical } from "react-icons/bs";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <BsPlus className="me-2 fs-3" />
      <BsThreeDotsVertical className="fs-4" />
    </div>
  );
}
