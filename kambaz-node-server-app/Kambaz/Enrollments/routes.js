// File: kambaz-node-server-app/Kambaz/Enrollments/routes.js
import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  // GET current (or specific) user's enrollments (raw enrollment docs)
  app.get("/api/users/:userId/enrollments", async (req, res) => {
    let { userId } = req.params;
    if (userId === "current") {
      const cu = req.session.currentUser;
      if (!cu) return res.sendStatus(401);
      userId = cu._id;
    }
    const enrolls = await dao.findEnrollmentsForUser(userId);
    res.json(enrolls);
  });

  // POST enroll current (or specific) user in a course
  app.post("/api/users/:userId/enrollments/:courseId", async (req, res) => {
    let { userId, courseId } = req.params;
    if (userId === "current") {
      const cu = req.session.currentUser;
      if (!cu) return res.sendStatus(401);
      userId = cu._id;
    }
    const newE = await dao.enrollUserInCourse(userId, courseId);
    res.json(newE);
  });

  // DELETE by enrollment _id
  app.delete("/api/enrollments/:enrollmentId", async (req, res) => {
    await dao.unenrollById(req.params.enrollmentId);
    res.sendStatus(204);
  });
}
