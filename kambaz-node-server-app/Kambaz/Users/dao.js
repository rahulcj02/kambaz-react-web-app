// kambaz-node-server-app/Kambaz/Users/dao.js
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export const createUser = (user) => {
  if (!user._id) user._id = uuidv4();
  return model.create(user);
};

export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByLoginId = (loginId) => model.findOne({ loginId });
export const findUserByCredentials = (loginId, password) =>
  model.findOne({ loginId, password });

export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });

export const deleteUser = (userId) => model.deleteOne({ _id: userId });

export const findUsersByRole = (role) => model.find({ role });

export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i");
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

export default {
  createUser,
  findAllUsers,
  findUserById,
  findUserByLoginId,
  findUserByCredentials,
  updateUser,
  deleteUser,
  findUsersByRole,
  findUsersByPartialName,
};
