// kambaz-node-server-app/Kambaz/Modules/dao.js
import model from "./model.js";

export const findModulesForCourse = (courseId) =>
  model.find({ course: courseId });

export const findModuleById = (moduleId) => model.findById(moduleId);

export const createModuleForCourse = (module) => model.create(module);

export const deleteModule = (moduleId) =>
  model.deleteOne({ _id: moduleId });

export const updateModule = (moduleId, moduleUpdates) =>
  model.updateOne({ _id: moduleId }, { $set: moduleUpdates });

export default {
  findModulesForCourse,
  findModuleById,
  createModuleForCourse,
  deleteModule,
  updateModule,
};
