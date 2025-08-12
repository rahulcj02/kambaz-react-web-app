// src/Kambaz/Courses/Assignments/client.ts
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API      = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API  = `${REMOTE_SERVER}/api/assignments`;

export const fetchAssignments = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`
  );
  return data;
};

export const getAssignment = async (aid: string) => {
  const { data } = await axiosWithCredentials.get(
    `${ASSIGNMENTS_API}/${aid}`
  );
  return data;
};

export const createAssignment = async (assignment: any) => {
  // no _id necessary; server will add one if missing
  const { data } = await axiosWithCredentials.post(
    ASSIGNMENTS_API,
    assignment
  );
  return data;
};

export const updateAssignmentClient = async (assignment: any) => {
  const { data } = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment
  );
  return data;
};

export const deleteAssignmentClient = async (aid: string) => {
  await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${aid}`);
};
