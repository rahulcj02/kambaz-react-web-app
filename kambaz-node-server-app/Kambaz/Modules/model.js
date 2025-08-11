// File: kambaz-node-server-app/Kambaz/Modules/model.js
import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("ModuleModel", schema);
export default model;
