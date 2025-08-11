// File: kambaz-node-server-app/Kambaz/Users/routes.js
import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };

  const findAllUsers = async (req, res) => {
    const { role, name } = req.query;
    if (role) return res.json(await dao.findUsersByRole(String(role)));
    if (name) return res.json(await dao.findUsersByPartialName(String(name)));
    res.json(await dao.findAllUsers());
  };

  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };

  const deleteUser = async (req, res) => {
    await dao.deleteUser(req.params.userId);
    res.sendStatus(204);
  };

  const signup = async (req, res) => {
    const existing = await dao.findUserByLoginId(req.body.loginId);
    if (existing) return res.status(400).json({ message: "LoginId already in use" });
    const currentUser = await dao.createUser(req.body);
    req.session.currentUser = currentUser;
    res.json(currentUser);
  };

  const signin = async (req, res) => {
    const { loginId, password } = req.body;
    const currentUser = await dao.findUserByCredentials(loginId, password);
    if (!currentUser) return res.status(401).json({ message: "Unable to login. Try again later." });
    req.session.currentUser = currentUser;
    res.json(currentUser);
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const profile = (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) return res.sendStatus(401);
    res.json(currentUser);
  };

  const updateUser = async (req, res) => {
    const userId = req.params.userId;
    await dao.updateUser(userId, req.body);
    const currentUser = await dao.findUserById(userId);
    req.session.currentUser = currentUser;
    res.json(currentUser);
  };

  // --- COURSES & ENROLLMENTS ---

  // CHANGE: courses for (possibly current) user via enrollments
  const findCoursesForUser = async (req, res) => {
    let { userId: uid } = req.params;
    if (uid === "current") {
      const cu = req.session.currentUser;
      if (!cu) return res.sendStatus(401);
      uid = cu._id;
    }
    const courses = await enrollmentsDao.findCoursesForUser(uid);
    res.json(courses);
  };

  // CHANGE: enroll user in course
  const enrollUserInCourse = async (req, res) => {
    let { userId: uid, courseId: cid } = req.params;
    if (uid === "current") {
      const cu = req.session.currentUser;
      if (!cu) return res.sendStatus(401);
      uid = cu._id;
    }
    const status = await enrollmentsDao.enrollUserInCourse(uid, cid);
    res.json(status);
  };

  // CHANGE: unenroll user from course
  const unenrollUserFromCourse = async (req, res) => {
    let { userId: uid, courseId: cid } = req.params;
    if (uid === "current") {
      const cu = req.session.currentUser;
      if (!cu) return res.sendStatus(401);
      uid = cu._id;
    }
    const status = await enrollmentsDao.unenrollUserFromCourse(uid, cid);
    res.json(status);
  };

  // (legacy) find courses user is enrolled in for the Courses page links
  const findCoursesForEnrolledUser = (req, res) => {
    let userId = req.params.userId;
    if (userId === "current") {
      const cu = req.session.currentUser;
      if (!cu) return res.sendStatus(401);
      userId = cu._id;
    }
    const courses = courseDao.findCoursesForEnrolledUser(userId);
    res.json(courses);
  };

  // Routes
  app.post("/api/users/current/courses", (req, res) => {}); // kept blank; not used anymore
  app.get("/api/users/:userId/courses", findCoursesForUser); // CHANGE
  app.post("/api/users/:userId/courses/:courseId", enrollUserInCourse); // CHANGE
  app.delete("/api/users/:userId/courses/:courseId", unenrollUserFromCourse); // CHANGE

  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
  app.put("/api/users/:userId", updateUser);
}
