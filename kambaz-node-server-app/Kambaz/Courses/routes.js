// kambaz-node-server-app/Kambaz/Courses/routes.js
import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";

export default function CourseRoutes(app) {
  // Courses
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  });

  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
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

  // MODULES for a course
  app.get("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const modules = await modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  app.post("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    // force the FK to the parent course
    const module = { ...req.body, course: courseId };
    const newModule = await modulesDao.createModuleForCourse(module);
    res.json(newModule);
  });

  // MODULES (by id)
  app.delete("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    const status = await modulesDao.deleteModule(moduleId);
    res.json(status);
  });

  app.put("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    const updates = req.body;
    await modulesDao.updateModule(moduleId, updates);
    const updated = await modulesDao.findModuleById(moduleId);
    res.json(updated); // return the updated module document
  });
}
