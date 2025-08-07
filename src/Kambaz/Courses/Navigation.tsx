// src/Kambaz/Courses/Navigation.tsx
import { NavLink, useParams } from "react-router-dom";
import { useSelector }            from "react-redux";
import type { RootState }         from "../store";
import "../styles.css";

export default function CourseNavigation() {
  const { courseId } = useParams<{ courseId: string }>();
  const currentUser = useSelector((s: RootState) => s.account.currentUser);
  const isStudent   = currentUser?.role === "Student";

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
// Students get the extra tab
  if (isStudent) {
    links.push("Enrollments");
  }
  return (
    <div id="wd-courses-navigation">
      <div className="wd list-group fs-5 rounded-0">
        {links.map((link) => (
          <NavLink
            key={link}
            to={`/Kambaz/Courses/${courseId}/${link}`}
            className={({ isActive }) =>
              `list-group-item border-0 ${
                isActive
                  ? "active text-dark border-start border-4 border-dark"
                  : "text-danger"
              }`
            }
          >
            {link}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
