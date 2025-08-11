// File: kambaz-node-server-app/Kambaz/Enrollments/model.js
import mongoose from "mongoose";
import schema from "./schema.js";

const model =
  mongoose.models.EnrollmentModel ||
  mongoose.model("EnrollmentModel", schema);

export default model;
