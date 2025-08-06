import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {
  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    res.json(modulesDao.findModulesForCourse(courseId));
  });

  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const module = { ...req.body, course: courseId };
    const newModule = modulesDao.createModule(module);
    res.json(newModule);
  });

  app.delete("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    modulesDao.deleteModule(moduleId);
    res.sendStatus(204);
  });

  app.put("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    const updated = modulesDao.updateModule(moduleId, req.body);
    res.json(updated);
  });
}
