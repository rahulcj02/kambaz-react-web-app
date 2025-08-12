// kambaz-node-server-app/Kambaz/Courses/Assignments/dao.js
import Database from "../../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter(a => a.course === courseId);
}

export function findAssignmentById(aid) {
  const { assignments } = Database;
  return assignments.find(a => a._id === aid);
}

export function createAssignment(a) {
  const newA = { _id: uuidv4(), ...a };
  Database.assignments.push(newA);
  return newA;
}

export function updateAssignment(aid, updates) {
  const { assignments } = Database;
  const a = assignments.find(x => x._id === aid);
  Object.assign(a, updates);
  return a;
}

export function deleteAssignment(aid) {
  const { assignments } = Database;
  Database.assignments = assignments.filter(x => x._id !== aid);
}
