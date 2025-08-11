// File: kambaz-node-server-app/Kambaz/Enrollments/dao.js
import model from "./model.js";

export function findEnrollmentsForUser(userId) {
  return model.find({ user: userId });
}

export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((e) => e.course);
}

export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((e) => e.user);
}

export function enrollUserInCourse(user, course) {
  return model.create({
    _id: `${user}-${course}`,   
    user,
    course,
  });
}

export function unenrollById(enrollmentId) {
  return model.deleteOne({ _id: enrollmentId });
}
