// File: src/Kambaz/Enrollments/client.ts
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

// GET enrollments for a user (use "current" for the logged-in user)
export const fetchEnrollmentsForUser = async (userId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/enrollments`
  );
  return data;
};

// POST enroll user in a course
export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/${userId}/enrollments/${courseId}`
  );
  return data;
};

// DELETE an enrollment by its _id
export const deleteEnrollmentById = async (enrollmentId: string) => {
  await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
};
