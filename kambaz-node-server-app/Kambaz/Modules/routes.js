// Kambaz/Modules/routes.js
import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {
  // CREATE a module for a course
  app.post("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const module = { ...req.body, course: courseId };
    const newModule = await modulesDao.createModuleForCourse(module);
    res.json(newModule);
  });

  // DELETE a module
  app.delete("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    const status = await modulesDao.deleteModule(moduleId);
    res.send(status);
  });

  // UPDATE a module
  app.put("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    const updates = req.body;
    await modulesDao.updateModule(moduleId, updates);
    // send the updated doc back (nice for the UI)
    const updated = await modulesDao.findModuleById(moduleId);
    res.json(updated);
  });
}
