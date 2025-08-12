// File: kambaz-node-server-app/index.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";

import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import PathParameters from "./Lab5/PathParameters.js";
import QueryParameters from "./Lab5/QueryParameters.js";
import WorkingWithObjects from "./Lab5/WorkingWithObjects.js";
import ModuleRoutes from "./Lab5/Module.js";
import WorkingWithArrays from "./Lab5/WorkingWithArrays.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
//import CourseModuleRoutes from "./Kambaz/Courses/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";

const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz";

mongoose
  .connect(CONNECTION_STRING)
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.error("Mongo connection error:", err));

const app = express();
app.set("trust proxy", 1);
//app.use(
//  cors({
//    credentials: true, // support cookies
//    origin: process.env.NETLIFY_URL || "http://localhost:5173",
//  })
//);


const sessionOptions = {
  secret: process.env.SESSION_SECRET || "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  // production tweaks
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    //domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

app.use(express.json());

Hello(app);
Lab5(app);
PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app);
ModuleRoutes(app);
WorkingWithArrays(app);
AssignmentRoutes(app);
UserRoutes(app);
CourseRoutes(app);
//CourseModuleRoutes(app);
EnrollmentRoutes(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
