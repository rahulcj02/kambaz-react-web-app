// kambaz-node-server-app/Kambaz/Assignments/routes.js
import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  // get all for a course
  app.get("/api/courses/:courseId/assignments", (req, res) => {
    res.json(dao.findAssignmentsForCourse(req.params.courseId));
  });

  // create
  app.post("/api/assignments", (req, res) => {
    const a = { ...req.body };
    const newA = dao.createAssignment(a);
    res.json(newA);
  });

  // read one
  app.get("/api/assignments/:aid", (req, res) => {
    const a = dao.findAssignmentById(req.params.aid);
    if (!a) return res.sendStatus(404);
    res.json(a);
  });

  // update
  app.put("/api/assignments/:aid", (req, res) => {
    const updated = dao.updateAssignment(req.params.aid, req.body);
    res.json(updated);
  });

  // delete
  app.delete("/api/assignments/:aid", (req, res) => {
    dao.deleteAssignment(req.params.aid);
    res.sendStatus(204);
  });
}
