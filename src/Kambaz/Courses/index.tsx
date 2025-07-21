// src/Kambaz/Courses/index.tsx
import {
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation
} from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

import CoursesNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "../People/Table";
import Piazza from "../Piazza";
import Zoom from "../Zoom";
import Quizzes from "../Quizzes";
import CourseStatus from "./Home/Status";
import courses from "../Database/courses.json"; // Make sure this file exists and is correct

export default function Courses() {
  const { courseId } = useParams<{ courseId: string }>();
  const { pathname } = useLocation();

  const course = courses.find((c) => c._id === courseId);
  const currentSection = pathname.split("/")[4] || "Home";

  return (
    <div id="wd-courses" className="p-3">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course ? course.name : `Course ${courseId}`} &gt; {currentSection}
      </h2>
      <hr />

      <div className="d-flex">
        {/* Sidebar */}
        <div className="d-none d-md-block me-2">
          <CoursesNavigation />
        </div>

        {/* Main panel with nested <Routes> */}
        <div className="flex-fill">
          <Routes>
            {/* redirect /Courses/:id → Home */}
            <Route index element={<Navigate to="Home" replace />} />

            {/* Home (no status pane) */}
            <Route path="Home" element={<Home />} />

            {/* Modules (with status pane) */}
            <Route
              path="Modules"
              element={
                <div className="d-flex">
                  {/* Module list */}
                  <Modules />
                  {/* Status pane only on xl+ */}
                  <div className="d-none d-xl-block ms-4">
                    <CourseStatus />
                  </div>
                </div>
              }
            />

            {/* everything else has no status pane */}
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Piazza" element={<Piazza />} />
            <Route path="Zoom" element={<Zoom />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Grades" element={<div>Grades Component</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
