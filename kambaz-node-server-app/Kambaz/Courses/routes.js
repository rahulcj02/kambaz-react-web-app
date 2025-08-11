// File: kambaz-node-server-app/Kambaz/Courses/routes.js
import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js"; // CHANGE

export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  });

  // CHANGE: auto-enroll author after creating a course
  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    const currentUser = req.session.currentUser;
    if (currentUser) {
      try {
        await enrollmentsDao.enrollUserInCourse(currentUser._id, course._id);
      } catch (e) {
        // ignore duplicate enrollment errors so request still succeeds
        // (e.g., if _id `${user}-${course}` already exists)
      }
    }
    res.json(course);
  });

  // CHANGE: await the DAO call
  app.get("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const modules = await modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  // CHANGE: students in a course
  app.get("/api/courses/:courseId/users", async (req, res) => {
    const { courseId } = req.params;
    const users = await enrollmentsDao.findUsersForCourse(courseId);
    res.json(users);
  });

  app.delete("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.deleteCourse(courseId);
    res.json(status);
  });

  app.put("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = await dao.updateCourse(courseId, courseUpdates);
    res.json(status);
  });
}
