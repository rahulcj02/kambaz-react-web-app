// src/Kambaz/Courses/Assignments/index.tsx
import { Link, useParams } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();

  return (
    <div id="wd-assignments">
      {/* Search & action buttons */}
      <input
        type="text"
        placeholder="Search for Assignments"
        id="wd-search-assignment"
      />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      {/* Section header */}
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      {/* List items with React-Router <Link> */}
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments/123`}
            className="wd-assignment-link"
          >
            A1 – ENV + HTML
          </Link>
          <br />
          Multiple Modules | <b>Not available until </b>May 6 at 12:00 am |
          Due May 13 at 11:59 pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments/124`}
            className="wd-assignment-link"
          >
            A2 – CSS + BOOTSTRAP
          </Link>
          <br />
          Multiple Modules | <b>Not available until </b>May 13 at 12:00 am |
          Due May 20 at 11:59 pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments/125`}
            className="wd-assignment-link"
          >
            A3 – JAVASCRIPT + REACT
          </Link>
          <br />
          Multiple Modules | <b>Not available until </b>May 20 at 12:00 am |
          Due May 27 at 11:59 pm | 100 pts
        </li>
      </ul>
    </div>
  );
}
