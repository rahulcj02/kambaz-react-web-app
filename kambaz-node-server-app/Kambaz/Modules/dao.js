// CHANGE: New Modules DAO
import db from "../../Database/index.js";

export function findModulesForCourse(courseId) {
  const { modules } = db;
  return modules.filter(m => m.course === courseId);
}
