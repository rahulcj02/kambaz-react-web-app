// kambaz-node-server-app/Kambaz/Assignments/routes.js
import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  // get all assignments for a course
  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const assignments = await dao.findAssignmentsForCourse(req.params.courseId);
    res.json(assignments);
  });

  // create
  app.post("/api/assignments", async (req, res) => {
    const created = await dao.createAssignment(req.body);
    res.json(created);
  });

  // read one
  app.get("/api/assignments/:aid", async (req, res) => {
    const a = await dao.findAssignmentById(req.params.aid);
    if (!a) return res.sendStatus(404);
    res.json(a);
  });

  // update
  app.put("/api/assignments/:aid", async (req, res) => {
    const updated = await dao.updateAssignment(req.params.aid, req.body);
    res.json(updated);
  });

  // delete
  app.delete("/api/assignments/:aid", async (req, res) => {
    await dao.deleteAssignment(req.params.aid);
    res.sendStatus(204);
  });
}