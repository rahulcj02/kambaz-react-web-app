// Lab5/WorkingWithObjects.js

// in-memory assignment object
const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

export default function WorkingWithObjects(app) {
  // 1) retrieve full object
  app.get('/lab5/assignment', (req, res) => {
    res.json(assignment);
  });

  // 2) retrieve title only
  app.get('/lab5/assignment/title', (req, res) => {
    res.json(assignment.title);
  });

  // 3) update title via path parameter
  app.get('/lab5/assignment/title/:newTitle', (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });
}
