// src/Kambaz/Enrollments/index.tsx
import React, { useEffect, useState }         from "react";
import { useSelector, useDispatch }           from "react-redux";
import { useParams }                           from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";
import type { RootState }                     from "../store";
import {
  setEnrollments,
  addEnrollment,
  deleteEnrollment,
} from "./reducer";
import * as client                             from "./client";
import * as courseClient                       from "../Courses/client";

// Destructure your Enrollment type for TS
import type { Enrollment } from "./reducer";

export default function Enrollments() {
  const dispatch    = useDispatch();
  const { courseId } = useParams<{ courseId: string }>();

  const currentUser = useSelector((s: RootState) => s.account.currentUser)!;
  const enrolls     = useSelector((s: RootState) => s.enrollments.enrollments);
  const [courses, setCourses] = useState<any[]>([]);

  // 1) load both lists on mount
  useEffect(() => {
    if (!currentUser) return;
    // fetch only this user's enrollments
    client
      .fetchEnrollmentsForUser("current")
      .then(es => dispatch(setEnrollments(es)))
      .catch(console.error);

    // fetch all courses
    courseClient
      .fetchAllCourses()
      .then(cs => setCourses(cs))
      .catch(console.error);
  }, [currentUser, dispatch]);

  // 2) helper to check enrollment
  const isEnrolled = (cid: string) =>
    enrolls.some((e: Enrollment) => e.course === cid);

  // 3) handlers
  const handleEnroll = async (cid: string) => {
    const e = await client.enrollUserInCourse("current", cid);
    dispatch(addEnrollment(e));
  };
  const handleUnenroll = async (cid: string) => {
    const eid = enrolls.find((e: Enrollment) => e.course === cid)!._id;
    await client.deleteEnrollmentById(eid);
    dispatch(deleteEnrollment(eid));
  };

  // 4) render grid
  return (
    <div className="p-4">
      <h2>Manage Enrollments</h2>
      <Row xs={1} md={3} className="g-4">
        {courses.map((c) => (
          <Col key={c._id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={c.image || "/images/default.jpg"}
                style={{ height: 150, objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{c.name}</Card.Title>
                <Card.Text>{c.description}</Card.Text>
                {isEnrolled(c._id) ? (
                  <Button
                    variant="danger"
                    onClick={() => handleUnenroll(c._id)}
                  >
                    Unenroll
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    onClick={() => handleEnroll(c._id)}
                  >
                    Enroll
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
