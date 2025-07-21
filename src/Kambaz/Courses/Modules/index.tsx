import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

type ModuleType = {
  course: string;
  name: string;
  lessons: string[];
};

export default function Modules() {
  const { courseId } = useParams<{ courseId: string }>();
  const modules: ModuleType[] = (db.modules as ModuleType[]).filter(
    (m) => m.course === courseId
  );

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module, index) => (
          <li
            key={index}
            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {module.name}
              <ModuleControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {module.lessons.map((lesson, idx) => (
                <li
                  key={idx}
                  className="wd-lesson list-group-item p-3 ps-1"
                >
                  <BsGripVertical className="me-2 fs-3" />
                  {lesson}
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
