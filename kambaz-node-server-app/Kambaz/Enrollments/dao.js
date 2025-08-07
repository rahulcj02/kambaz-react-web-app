// kambaz-node-server-app/Kambaz/Enrollments/dao.js
import { v4 as uuidv4 } from "uuid";
import db from "../../Database/index.js";

export function findEnrollmentsForUser(userId) {
  return db.enrollments.filter(e => e.user === userId);
}

export function enrollUserInCourse(userId, courseId) {
  const newE = { _id: uuidv4(), user: userId, course: courseId };
  db.enrollments.push(newE);
  return newE;
}

export function unenrollById(enrollmentId) {
  db.enrollments = db.enrollments.filter(e => e._id !== enrollmentId);
}
