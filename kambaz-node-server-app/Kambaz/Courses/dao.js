// File: kambaz-node-server-app/Kambaz/Courses/dao.js
import db from "../../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function findAllCourses() {
  return model.find();
}

export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = db;
  return courses.filter((course) =>
    enrollments.some((e) => e.user === userId && e.course === course._id)
  );
}

export function createCourse(course) {
  const newCourse = { ...course, _id: uuidv4() };
  return model.create(newCourse);
}

export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}
