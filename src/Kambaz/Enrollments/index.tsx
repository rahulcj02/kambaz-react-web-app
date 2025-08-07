// src/Kambaz/Enrollments/index.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";
import type { RootState } from "../store";
import {
  setEnrollments,
  addEnrollment,
  deleteEnrollment,
} from "./reducer";
import * as client from "./client";

export default function Enrollments() {
  const dispatch = useDispatch();
  const { courseId } = useParams<{ courseId: string }>();
  const currentUser = useSelector((s: RootState) => s.account.currentUser)!;
  const myEnrolls = useSelector((s: RootState) => s.enrollments.enrollments);
  const isEnrolled = myEnrolls.some(e => e.course === courseId);

  // 1) fetch on mount / change
  useEffect(() => {
    if (!currentUser) return;
    client
      .fetchEnrollmentsForUser("current")
      .then(es => dispatch(setEnrollments(es)))
      .catch(console.error);
  }, [currentUser, dispatch]);

  // 2) enroll / unenroll handlers
  const onEnroll = async () => {
    const e = await client.enrollUserInCourse("current", courseId!);
    dispatch(addEnrollment(e));
  };
  const onUnenroll = async () => {
    const eid = myEnrolls.find(e => e.course === courseId!)!._id;
    await client.deleteEnrollmentById(eid);
    dispatch(deleteEnrollment(eid));
  };

  return (
    <div className="p-4">
      {isEnrolled ? (
        <Button variant="danger" onClick={onUnenroll}>
          Unenroll
        </Button>
      ) : (
        <Button variant="success" onClick={onEnroll}>
          Enroll
        </Button>
      )}
    </div>
  );
}
