// Lab5/Module.js

const moduleObj = {
  id: "M1",
  name: "Introduction to REST",
  description: "Module covering RESTful API design with Express.js",
  course: "CS550",
};

export default function ModuleRoutes(app) {
  app.get("/lab5/module", (req, res) => {
    res.json(moduleObj);
  });

  app.get("/lab5/module/name", (req, res) => {
    res.json(moduleObj.name);
  });

  app.get("/lab5/module/name/:newName", (req, res) => {
    moduleObj.name = req.params.newName;
    res.json(moduleObj);
  });

  app.get("/lab5/module/description/:newDesc", (req, res) => {
    moduleObj.description = req.params.newDesc;
    res.json(moduleObj);
  });
}
