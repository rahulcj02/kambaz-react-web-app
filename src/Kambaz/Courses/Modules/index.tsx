// File: src/Kambaz/Courses/Modules/index.tsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import { FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import {
  addModule,
  deleteModule,
  editModule,
  updateModule,
  finishEditModule,
} from "./reducer";
import type { ModuleType } from "./reducer";

import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const { courseId } = useParams<{ courseId: string }>();
  const dispatch = useDispatch();

  // pull modules from Redux
  const modules = useSelector(
    (s: RootState) => s.modules.modules
  ) as ModuleType[];

  // only faculty can add/edit/delete
  const currentUser = useSelector(
    (s: RootState) => s.account.currentUser
  );
  const isFaculty =
    currentUser?.role === "Instructor" || currentUser?.role === "Admin";

  // local state just for the new‐module name input
  const [moduleName, setModuleName] = useState("");

  // dispatchers
  const handleAdd = () => {
    dispatch(addModule({ course: courseId!, name: moduleName }));
    setModuleName("");
  };
  const handleDelete = (id: string) => dispatch(deleteModule(id));
  const handleStartEdit = (id: string) => dispatch(editModule(id));
  const handleChange = (m: ModuleType, name: string) =>
    dispatch(updateModule({ ...m, name, editing: true }));
  const handleFinishEdit = (m: ModuleType) =>
    dispatch(finishEditModule({ ...m, editing: false }));

  return (
    <div>
      {isFaculty && (
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={handleAdd}
        />
      )}

      <ul id="wd-modules" className="list-group rounded-0 mt-4">
        {modules
          .filter((m) => m.course === courseId)
          .map((module) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />

                {!module.editing && (
                  <span className="me-auto">{module.name}</span>
                )}
                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block me-auto"
                    defaultValue={module.name}
                    onChange={(e) =>
                      handleChange(module, e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleFinishEdit({
                          ...module,
                          name: (e.target as HTMLInputElement).value,
                          editing: false,
                        });
                      }
                    }}
                  />
                )}

                {isFaculty && (
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={handleDelete}
                    editModule={handleStartEdit}
                  />
                )}
              </div>

              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson, idx) => (
                  <li
                    key={idx}
                    className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center"
                  >
                    <BsGripVertical className="me-2 fs-3" />
                    <span className="me-auto">{lesson}</span>
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
