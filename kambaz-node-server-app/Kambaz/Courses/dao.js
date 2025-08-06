import db from "../../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAllCourses() {
  return db.courses;
}

export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = db;
  return courses.filter(course =>
    enrollments.some(e => e.user === userId && e.course === course._id)
  );
}

export function createCourse(course) {
  const newCourse = { ...course, _id: uuidv4() };
  db.courses = [...db.courses, newCourse];
  return newCourse;
}

export function deleteCourse(courseId) {
  const { courses, enrollments } = db;
  db.courses = courses.filter(c => c._id !== courseId);
  db.enrollments = enrollments.filter(e => e.course !== courseId);
}

export function updateCourse(courseId, courseUpdates) {
  const { courses } = db;
  const course = courses.find(c => c._id === courseId);
  Object.assign(course, courseUpdates);
  return course;
}
