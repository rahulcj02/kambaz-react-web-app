// File: kambaz-node-server-app/Kambaz/Enrollments/schema.js
import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    _id: { type: String }, 
    user:   { type: String, ref: "UserModel",   required: true },
    course: { type: String, ref: "CourseModel", required: true },

    grade:       { type: Number },
    letterGrade: { type: String },
    enrollDate:  { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["ENROLLED", "DROPPED", "COMPLETED"],
      default: "ENROLLED",
    },
  },
  { collection: "enrollments" }
);

export default enrollmentSchema;
