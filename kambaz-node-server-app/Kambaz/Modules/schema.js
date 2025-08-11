// File: kambaz-node-server-app/Kambaz/Modules/schema.js
import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: String,
    lessons: [String],
    course: { type: String, ref: "CourseModel", required: true },
  },
  { collection: "modules" }
);

export default schema;
