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
    if (role) {
      const users = await dao.findUsersByRole(String(role));
      res.json(users);
      return;
    }
    if (name) {
      const users = await dao.findUsersByPartialName(String(name));
      res.json(users);
      return;
    }
    const users = await dao.findAllUsers();
    res.json(users);
  };

  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };

  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };

  const signup = async (req, res) => {
    const existing = await dao.findUserByLoginId(req.body.loginId);
    if (existing) {
      return res.status(400).json({ message: "LoginId already in use" });
    }
    const currentUser = await dao.createUser(req.body);
    req.session.currentUser = currentUser;
    res.json(currentUser);
  };

  const signin = async (req, res) => {
    const { loginId, password } = req.body;
    const currentUser = await dao.findUserByCredentials(loginId, password);
    if (currentUser) {
      req.session.currentUser = currentUser;
      return res.json(currentUser);
    }
    return res
      .status(401)
      .json({ message: "Unable to login. Try again later." });
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const profile = (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      return res.sendStatus(401);
    }
    res.json(currentUser);
  };

  const updateUser = async (req, res) => {
    const userId = req.params.userId;
    const userUpdates = req.body;
    await dao.updateUser(userId, userUpdates);
    const sessionUser = req.session.currentUser;
    if (sessionUser && sessionUser._id === userId) {
      req.session.currentUser = { ...sessionUser, ...userUpdates };
    }
    const updatedUser = await dao.findUserById(userId);
    res.json(updatedUser);
  };

  const findCoursesForUser = async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) return res.sendStatus(401);

    // Admin: return every course
    if (currentUser.role === "Admin") {
      const all = await courseDao.findAllCourses();
      return res.json(all);
    }

    let { userId } = req.params;
    if (userId === "current") userId = currentUser._id;

    const courses = await enrollmentsDao.findCoursesForUser(userId);
    res.json(courses);
  };

  const createCourseForCurrent = (req, res) => {
    const cu = req.session.currentUser;
    const newCourse = courseDao.createCourse(req.body);
    enrollmentsDao.enrollUserInCourse(cu._id, newCourse._id);
    res.json(newCourse);
  };

  // routes
  app.post("/api/users/current/courses", createCourseForCurrent);
  app.get("/api/users/:userId/courses", findCoursesForUser); 
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
