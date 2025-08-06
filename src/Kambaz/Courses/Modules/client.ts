import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const COURSES_API    = `${REMOTE_SERVER}/api/courses`;
export const MODULES_API    = `${REMOTE_SERVER}/api/modules`;

export const findModulesForCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/modules`
  );
  return data;
};

export const createModuleForCourse = async (
  courseId: string,
  module: any
) => {
  const { data } = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return data;
};

export const deleteModule = async (moduleId: string) => {
  await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
};

export const updateModule = async (module: any) => {
  const { data } = await axiosWithCredentials.put(
    `${MODULES_API}/${module._id}`,
    module
  );
  return data;
};
