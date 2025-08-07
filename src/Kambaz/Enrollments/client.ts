// src/Kambaz/Enrollments/client.ts
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const USERS_API    = `${import.meta.env.VITE_REMOTE_SERVER}/api/users`;
export const ENROLL_API   = `${import.meta.env.VITE_REMOTE_SERVER}/api/enrollments`;

export const fetchEnrollmentsForUser = (userId: string) =>
  axiosWithCredentials
    .get(`${USERS_API}/${userId}/enrollments`)
    .then(r => r.data as { _id:string; user:string; course:string }[]);

export const enrollUserInCourse = (userId: string, courseId: string) =>
  axiosWithCredentials
    .post(`${USERS_API}/${userId}/enrollments/${courseId}`)
    .then(r => r.data);

export const deleteEnrollmentById = (eid: string) =>
  axiosWithCredentials.delete(`${ENROLL_API}/${eid}`);
