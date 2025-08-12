// src/Kambaz/Courses/Assignments/client.ts
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE = import.meta.env.VITE_REMOTE_SERVER;

// ← CALLBACK: fetch from the server route you implemented
export const fetchAssignments = (courseId: string) =>
  axiosWithCredentials
    .get(`${REMOTE}/api/courses/${courseId}/assignments`)
    .then(r => r.data as any[]);

// (the rest stays the same)
export const createAssignment = (a: any) =>
  axiosWithCredentials.post(`${REMOTE}/api/assignments`, a).then(r => r.data);

export const updateAssignmentClient = (a: any) =>
  axiosWithCredentials.put(`${REMOTE}/api/assignments/${a._id}`, a).then(r => r.data);

export const deleteAssignmentClient = (aid: string) =>
  axiosWithCredentials.delete(`${REMOTE}/api/assignments/${aid}`);
