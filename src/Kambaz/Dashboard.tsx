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

interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: (c: any) => void;
  addNewCourse: () => void;
  deleteCourse: (id: string) => void;
  updateCourse: () => void;
  enrolling?: boolean;
  setEnrolling?: (v: boolean) => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  updateCourse,
  deleteCourse,
  enrolling = false,
  setEnrolling = () => {},
}: DashboardProps) {
  const currentUser = useSelector(
    (state: RootState) => state.account.currentUser
  );
  const isFaculty =
    currentUser?.role === "Instructor" || currentUser?.role === "Admin";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/images/NEU.jpg";
  };

  const visible = courses;

  return (
    <div id="wd-dashboard" className="p-4" style={{ marginLeft: 110 }}>
      <h1 id="wd-dashboard-title" className="d-flex align-items-center">
        <span>Dashboard</span>
        <Button
          className="ms-auto"
          size="sm"
          variant="primary"
          onClick={() => setEnrolling(!enrolling)}
        >
          {enrolling ? "My Courses" : "All Courses"}
        </Button>
      </h1>
      <hr />
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
              onClick={course._id ? updateCourse : addNewCourse}
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
      <h2 id="wd-dashboard-published">
        Published Courses ({visible.length})
      </h2>
      <hr />
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
                <Link
                  to={`/Kambaz/Courses/${c._id}/Home`}
                  className="btn btn-primary me-2"
                >
                  Go
                </Link>

                {/* If/when you wire up enroll/unenroll, c.enrolled is already computed */}
                {enrolling && (
                  <Button
                    className={`ms-2 ${c.enrolled ? "btn-danger" : "btn-success"}`}
                    onClick={() => {}}
                  >
                    {c.enrolled ? "Unenroll" : "Enroll"}
                  </Button>
                )}

                {isFaculty && (
                  <>
                    <Button
                      id="wd-delete-course-click"
                      variant="danger"
                      className="ms-2"
                      onClick={() => deleteCourse(c._id)}
                    >
                      Delete
                    </Button>
                    <Button
                      id="wd-edit-course-click"
                      variant="warning"
                      className="ms-2"
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
