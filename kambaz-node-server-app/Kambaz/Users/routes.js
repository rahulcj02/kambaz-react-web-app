import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function UserRoutes(app) {
  const createUser = (req, res) => {
    const user = dao.createUser(req.body);
    res.json(user);
  };

  const findAllUsers = (req, res) => {
    res.json(dao.findAllUsers());
  };

  const findUserById = (req, res) => {
    res.json(dao.findUserById(req.params.userId));
  };

  const deleteUser = (req, res) => {
    dao.deleteUser(req.params.userId);
    res.sendStatus(204);
  };

  const signup = (req, res) => {
    const existing = dao.findUserByLoginId(req.body.loginId);
    if (existing) {
      return res.status(400).json({ message: "LoginId already in use" });
    }
    const currentUser = dao.createUser(req.body);
    req.session.currentUser = currentUser;
    res.json(currentUser);
  };

  const signin = (req, res) => {
    const { loginId, password } = req.body;
    const currentUser = dao.findUserByCredentials(loginId, password);
    if (currentUser) {
      req.session.currentUser = currentUser;
      return res.json(currentUser);
    }
    return res.status(401).json({ message: "Unable to login. Try again later." });
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

  const updateUser = (req, res) => {
    const userId = req.params.userId;
    dao.updateUser(userId, req.body);
    const currentUser = dao.findUserById(userId);
    req.session.currentUser = currentUser;
    res.json(currentUser);
  };

  const findCoursesForEnrolledUser = (req, res) => {
  let userId = req.params.userId;
  if (userId === "current") {
    const cu = req.session.currentUser;
    if (!cu) {
      return res.sendStatus(401);
    }
    userId = cu._id;
  }
  const courses = courseDao.findCoursesForEnrolledUser(userId);
  res.json(courses);
};

const createCourseForCurrent = (req, res) => {
    const cu = req.session.currentUser;
    const newCourse = courseDao.createCourse(req.body);
    enrollmentsDao.enrollUserInCourse(cu._id, newCourse._id);
    res.json(newCourse);
  };

  app.post("/api/users/current/courses", createCourseForCurrent);
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
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
