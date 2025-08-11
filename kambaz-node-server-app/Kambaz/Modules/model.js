// kambaz-node-server-app/Kambaz/Modules/model.js
import mongoose from "mongoose";
import schema from "./schema.js";

const ModuleModel =
  mongoose.models.ModuleModel || mongoose.model("ModuleModel", schema);

export default ModuleModel;
