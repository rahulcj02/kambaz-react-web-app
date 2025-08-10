// File: kambaz-node-server-app/Kambaz/Users/schema.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: String,
    firstName: String,
    lastName: String,
    loginId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    section: String,
    role: {
      type: String,
      enum: ["Student", "Instructor", "TA", "Admin"],
      default: "Student",
    },
    lastActivity: Date,
    totalActivity: String,
    email: String,
    dob: Date,
  },
  { collection: "users" }
);

export default userSchema;
