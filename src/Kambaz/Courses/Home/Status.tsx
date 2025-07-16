// File: src/Kambaz/Courses/Home/Status.tsx
import {
  FaBan,
  FaCheckCircle,
  FaBook,
  FaUpload,
  FaHome,
  FaChartBar,
  FaBullhorn,
  FaBell
} from "react-icons/fa";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="d-flex flex-column gap-2">
      <h2>Course Status</h2>

      {/* 1) Unpublish / Publish */}
      <div className="d-flex gap-2">
        <Button id="wd-unpublish-btn" variant="outline-secondary" className="text-dark">
          <FaBan className="me-1" />
          Unpublish
        </Button>
        <Button id="wd-publish-btn" variant="success" className="text-white">
          <FaCheckCircle className="me-1" />
          Publish
        </Button>
      </div>

      {/* 2) Import Existing Content */}
      <Button
        id="wd-import-ext-btn"
        variant="outline-secondary"
        className="text-dark text-start"
      >
        <FaBook className="me-1" />
        Import Existing Content
      </Button>

      {/* 3) Import from Commons */}
      <Button
        id="wd-import-com-btn"
        variant="outline-secondary"
        className="text-dark text-start"
      >
        <FaUpload className="me-1" />
        Import from Commons
      </Button>

      {/* 4) Choose Home Page */}
      <Button
        id="wd-choose-home-btn"
        variant="outline-secondary"
        className="text-dark text-start"
      >
        <FaHome className="me-1" />
        Choose Home Page
      </Button>

      {/* 5) View Course Stream */}
      <Button
        id="wd-view-course-btn"
        variant="outline-secondary"
        className="text-dark text-start"
      >
        <FaChartBar className="me-1" />
        View Course Stream
      </Button>

      {/* 6) New Announcement */}
      <Button
        id="wd-new-anon-btn"
        variant="outline-secondary"
        className="text-dark text-start"
      >
        <FaBullhorn className="me-1" />
        New Announcement
      </Button>

      {/* 7) New Analytics */}
      <Button
        id="wd-new-ana-btn"
        variant="outline-secondary"
        className="text-dark text-start"
      >
        <FaChartBar className="me-1" />
        New Analytics
      </Button>

      {/* 8) View Course Notifications */}
      <Button
        id="wd-view-nots-btn"
        variant="outline-secondary"
        className="text-dark text-start"
      >
        <FaBell className="me-1" />
        View Course Notifications
      </Button>
    </div>
  );
}
