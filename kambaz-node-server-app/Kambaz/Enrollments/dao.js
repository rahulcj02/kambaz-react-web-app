// File: kambaz-node-server-app/Kambaz/Enrollments/dao.js
import model from "./model.js";

// CHANGE: courses the user is enrolled in (populate course)
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((e) => e.course);
}

// CHANGE: users enrolled in a course (populate user)
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((e) => e.user);
}

// CHANGE: create enrollment (id = `${user}-${course}`)
export function enrollUserInCourse(user, course) {
  const newEnrollment = { _id: `${user}-${course}`, user, course };
  return model.create(newEnrollment);
}

// CHANGE: remove enrollment
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}
