// File: kambaz-node-server-app/Kambaz/Modules/dao.js
import model from "./model.js";

export const findModulesForCourse = (courseId) =>
  model.find({ course: courseId });

export default { findModulesForCourse };
