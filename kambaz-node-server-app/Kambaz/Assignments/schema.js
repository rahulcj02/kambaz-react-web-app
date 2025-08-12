// kambaz-node-server-app/Kambaz/Assignments/schema.js
import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    _id: { type: String },                    
    course: { type: String, ref: "CourseModel", required: true }, 
    title: String,
    description: String,
    points: Number,
    dueDate: String,
    availableDate: String,
  },
  { collection: "assignments" }
);

export default assignmentSchema;