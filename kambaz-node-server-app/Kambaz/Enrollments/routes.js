// kambaz-node-server-app/Kambaz/Enrollments/routes.js
import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  // 1. List current user’s enrollments
  app.get("/api/users/:userId/enrollments", (req, res) => {
    let { userId } = req.params;
    if (userId === "current") {
      const cu = req.session.currentUser;
      if (!cu) return res.sendStatus(401);
      userId = cu._id;
    }
    const enrolls = dao.findEnrollmentsForUser(userId);
    res.json(enrolls);
  });

  // 2. Enroll current user in a course
  app.post("/api/users/:userId/enrollments/:courseId", (req, res) => {
    let { userId, courseId } = req.params;
    if (userId === "current") {
      const cu = req.session.currentUser;
      if (!cu) return res.sendStatus(401);
      userId = cu._id;
    }
    const newE = dao.enrollUserInCourse(userId, courseId);
    res.json(newE);
  });

  // 3. Un-enroll (delete) by enrollment _id
  app.delete("/api/enrollments/:enrollmentId", (req, res) => {
    dao.unenrollById(req.params.enrollmentId);
    res.sendStatus(204);
  });
}
