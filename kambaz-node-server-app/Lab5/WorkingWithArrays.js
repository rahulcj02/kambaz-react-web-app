// Lab5/WorkingWithArrays.js

let todos = [
  { id: 1, title: "Task 1",   completed: false, description: "" },
  { id: 2, title: "Task 2",   completed: true,  description: "" },
  { id: 3, title: "Task 3",   completed: false, description: "" },
  { id: 4, title: "Task 4",   completed: true,  description: "" },
];

export default function WorkingWithArrays(app) {
  // ── GET all or filter by completed ───────────────────────────────────────
  app.get("/lab5/todos", (req, res) => {
    const { completed } = req.query;
    if (completed !== undefined) {
      const bool = completed === "true";
      return res.json(todos.filter((t) => t.completed === bool));
    }
    res.json(todos);
  });

  // ── GET by ID ────────────────────────────────────────────────────────────
  app.get("/lab5/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find((t) => t.id === id);
    res.json(todo);
  });

  // ── Legacy GET-create (returns full array) ──────────────────────────────
  app.get("/lab5/todos/create", (req, res) => {
    const newTodo = {
      id: Date.now(),
      title: "New Task",
      completed: false,
      description: "",
    };
    todos.push(newTodo);
    res.json(todos);
  });

  // ── POST create with JSON body ──────────────────────────────────────────
  app.post("/lab5/todos", (req, res) => {
    const {
      title       = "New Task",
      completed   = false,
      description = "",
    } = req.body;
    const newTodo = { id: Date.now(), title, completed, description };
    todos.push(newTodo);
    res.json(newTodo);
  });

  // ── Legacy GET-delete (returns full array) ──────────────────────────────
  app.get("/lab5/todos/:id/delete", (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter((t) => t.id !== id);
    res.json(todos);
  });

  // ── DELETE proper ────────────────────────────────────────────────────────
  app.delete("/lab5/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter((t) => t.id !== id);
    res.sendStatus(200);
  });

  // ── PUT update with 404 handling ────────────────────────────────────────
  app.put("/lab5/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const idx = todos.findIndex((t) => t.id === id);
    if (idx === -1) {
      return res
        .status(404)
        .json({ message: `Unable to update Todo with ID ${id}` });
    }
    // merge incoming JSON over existing todo
    todos = todos.map((t) =>
      t.id === id ? { ...t, ...req.body } : t
    );
    res.sendStatus(200);
  });
}
