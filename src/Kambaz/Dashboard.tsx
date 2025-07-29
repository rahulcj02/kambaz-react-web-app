// File: src/Kambaz/Dashboard/index.tsx
import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
import * as db from "./Database";

interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: (c: any) => void;
  addNewCourse: () => void;
  deleteCourse: (id: string) => void;
  updateCourse: () => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  updateCourse,
  deleteCourse,
}: DashboardProps) {
  const currentUser = useSelector(
    (state: RootState) => state.account.currentUser
  );
  const isFaculty =
    currentUser?.role === "Instructor" || currentUser?.role === "Admin";

  // pull in enrollments so we can cross-check
  const { enrollments } = db;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/images/NEU.jpg";
  };

  // faculty see everything; students only see their enrollments
const visible = isFaculty
  ? courses
  : courses.filter(c =>
      enrollments.some(
        (enr) =>
          enr.user === currentUser?._id &&
          enr.course === c._id
      )
    );


  return (
    <div id="wd-dashboard" className="p-4" style={{ marginLeft: 110 }}>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* only faculty can add and edit*/}
      {isFaculty && (
  <>
    <h5>{course._id ? "Edit Course …" : "New Course …"}</h5>
    <InputGroup className="mb-2">
      <FormControl
        value={course.name}
        placeholder="Course Name"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <Button
        id="wd-add-new-course-click"
        variant="primary"
        onClick={course._id ? updateCourse : addNewCourse}  // ← conditional
      >
        {course._id ? "Save" : "Add"}                       
      </Button>
    </InputGroup>
    <FormControl
      as="textarea"
      rows={3}
      value={course.description}
      className="mb-4"
      placeholder="Description"
      onChange={(e) =>
        setCourse({ ...course, description: e.target.value })
      }
    />
    <hr />
  </>
)}


      {/* Published Courses Count */}
      <h2 id="wd-dashboard-published">
        Published Courses ({visible.length})
      </h2>
      <hr />

      {/* Courses Grid */}
      <Row xs={1} md={4} className="g-4">
        {visible.map((c) => (
          <Col
            key={c._id}
            className="wd-dashboard-course"
            style={{ width: "270px" }}
          >
            <Card className="h-100 rounded-3 overflow-hidden">
              <Card.Img
                variant="top"
                src={c.image || "/images/default.jpg"}
                onError={handleImageError}
                width="100%"
                height={160}
                alt={c.name}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  <Link
                    to={`/Kambaz/Courses/${c._id}/Home`}
                    className="text-decoration-none text-dark"
                  >
                    {c.name}
                  </Link>
                </Card.Title>
                <Card.Text
                  className="wd-dashboard-course-description overflow-hidden"
                  style={{ height: "100px" }}
                >
                  {c.description}
                </Card.Text>

                {/* everyone gets Go */}
                <Link
                  
                  to={`/Kambaz/Courses/${c._id}/Home`}
                  className="btn btn-primary me-2"
                >
                  Go
                </Link>

                {/* only faculty can Edit/Delete */}
                {isFaculty && (
                  <>
                    <Button
                      id="wd-delete-course-click"
                      variant="danger"
                      className="me-2"
                      onClick={() => deleteCourse(c._id)}
                    >
                      Delete
                    </Button>
                    <Button
                      id="wd-edit-course-click"
                      variant="warning"
                      onClick={() => setCourse(c)}
                    >
                      Edit
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
