// kambaz-node-server-app/Kambaz/Assignments/dao.js
import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export async function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

export async function findAssignmentById(aid) {
  return model.findById(aid);
}

export async function createAssignment(a) {
  const toCreate = { ...a, _id: a._id || uuidv4() }; 
  return model.create(toCreate);
}

export async function updateAssignment(aid, updates) {
  return model.findByIdAndUpdate(aid, { $set: updates }, { new: true });
}

export async function deleteAssignment(aid) {
  return model.deleteOne({ _id: aid });
}
