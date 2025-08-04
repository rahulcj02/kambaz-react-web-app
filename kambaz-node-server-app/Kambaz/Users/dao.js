// kambaz-node-server-app/Kambaz/Users/dao.js
import db from "../../Database/index.js";
import { v4 as uuidv4 } from "uuid";

let { users } = db;

export const createUser = (user) => {
  const newUser = { ...user, _id: uuidv4() };
  users = [...users, newUser];
  return newUser;
};

export const findAllUsers = () => users;

export const findUserById = (userId) =>
  users.find((u) => u._id === userId);

export const findUserByLoginId = (loginId) =>
  users.find((u) => u.loginId === loginId);

export const findUserByCredentials = (loginId, password) =>
  users.find((u) => u.loginId === loginId && u.password === password);

export const updateUser = (userId, user) => {
  users = users.map((u) =>
    u._id === userId ? { ...user, _id: userId } : u
  );
  return users.find((u) => u._id === userId);
};

export const deleteUser = (userId) => {
  users = users.filter((u) => u._id !== userId);
};

