import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    res.json(dao.findAllCourses());
  });
  
  app.get("/api/courses/:courseId/modules", (req, res) => {  
    const { courseId } = req.params;
    const modules = modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  app.delete("/api/courses/:courseId", (req, res) => {
    dao.deleteCourse(req.params.courseId);
    res.sendStatus(204);
  });
  app.put("/api/courses/:courseId", (req, res) => {
    const updated = dao.updateCourse(req.params.courseId, req.body);
    res.json(updated);
  });
}
