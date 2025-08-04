// index.js
import express               from "express";
import cors                  from "cors";
import Hello                 from "./Hello.js";
import Lab5                  from "./Lab5/index.js";
import PathParameters        from "./Lab5/PathParameters.js";
import QueryParameters       from "./Lab5/QueryParameters.js";
import WorkingWithObjects    from "./Lab5/WorkingWithObjects.js";
import ModuleRoutes          from "./Lab5/Module.js";
import WorkingWithArrays     from "./Lab5/WorkingWithArrays.js";

const app = express();

// CORS
app.use(cors());

// JSON body parser
app.use(express.json());

Hello(app);
Lab5(app);
PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app);
ModuleRoutes(app);
WorkingWithArrays(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
