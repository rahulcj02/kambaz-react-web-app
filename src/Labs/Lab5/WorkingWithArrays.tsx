// src/Labs/Lab5/WorkingWithArrays.tsx
import { useState, useEffect } from "react";
import { FormControl, FormCheck, Button, ListGroup } from "react-bootstrap";
import * as client from "./client";

export default function WorkingWithArrays() {
  // 1) local state: full list + single-todo inputs
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState({
    id: "1",
    title: "",
    description: "",
    completed: false,
  });

  // 2) fetch entire list on mount
  useEffect(() => {
    client
      .fetchTodos()
      .then(setTodos)
      .catch(console.error);
  }, []);

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      {/* Retrieve all */}
      <h4>Retrieving Arrays</h4>
      <Button
        id="wd-retrieve-todos"
        className="mb-2"
        onClick={() => client.fetchTodos().then(setTodos)}
      >
        Get Todos
      </Button>

      <ListGroup className="mb-4">
        {todos.map((t) => (
          <ListGroup.Item key={t.id}>
            <strong>#{t.id}</strong> – {t.title} [{t.completed ? "✓" : "✗"}]
            <br />
            {t.description}
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Create */}
      <h4>Creating New Items in an Array</h4>
      <FormControl
        placeholder="Title"
        className="mb-2"
        value={todo.title}
        onChange={(e) => setTodo((f) => ({ ...f, title: e.target.value }))}
      />
      <FormCheck
        type="checkbox"
        label="Completed?"
        className="mb-2"
        checked={todo.completed}
        onChange={(e) =>
          setTodo((f) => ({ ...f, completed: e.target.checked }))
        }
      />
      <FormControl
        placeholder="Description"
        className="mb-2"
        value={todo.description}
        onChange={(e) =>
          setTodo((f) => ({ ...f, description: e.target.value }))
        }
      />
      <Button
        id="wd-create-todo"
        className="mb-4"
        onClick={() =>
          client
            .postTodo({
              title: todo.title,
              completed: todo.completed,
              description: todo.description,
            })
            .then((newTodo) => setTodos([...todos, newTodo]))
            .catch(console.error)
        }
      >
        Create Todo
      </Button>

      {/* Delete */}
      <h4>Deleting from an Array</h4>
      <FormControl
        type="number"
        className="w-25 mb-2"
        value={todo.id}
        onChange={(e) => setTodo((f) => ({ ...f, id: e.target.value }))}
      />
      <Button
        id="wd-delete-todo"
        className="mb-4 float-end"
        onClick={() =>
          client
            .deleteTodo({ id: Number(todo.id) })
            .then(() =>
              setTodos(todos.filter((t) => t.id !== Number(todo.id)))
            )
            .catch(console.error)
        }
      >
        Delete Todo with ID = {todo.id}
      </Button>
      <div style={{ clear: "both" }} />

      {/* Update title */}
      <h4>Updating an Item in an Array</h4>
      <FormControl
        type="number"
        className="w-25 float-start me-2 mb-2"
        value={todo.id}
        onChange={(e) => setTodo((f) => ({ ...f, id: e.target.value }))}
      />
      <FormControl
        type="text"
        className="w-50 float-start me-2 mb-2"
        value={todo.title}
        onChange={(e) => setTodo((f) => ({ ...f, title: e.target.value }))}
      />
      <Button
        id="wd-update-todo-title"
        className="mb-4 float-end"
        onClick={() =>
          client
            .updateTodo({ id: Number(todo.id), title: todo.title })
            .then((updated) =>
              setTodos(
                todos.map((t) => (t.id === updated.id ? updated : t))
              )
            )
            .catch(console.error)
        }
      >
        Update Todo
      </Button>
      <div style={{ clear: "both" }} />

      {/* Updating Completed */}
      <h4>Updating Completed</h4>
      <FormControl
        type="number"
        className="w-25 float-start me-2 mb-2"
        value={todo.id}
        onChange={(e) => setTodo((f) => ({ ...f, id: e.target.value }))}
      />
      <FormCheck
        type="checkbox"
        className="float-start me-2 mb-2"
        label="Completed?"
        checked={todo.completed}
        onChange={(e) =>
          setTodo((f) => ({ ...f, completed: e.target.checked }))
        }
      />
      <Button
        id="wd-update-todo-completed"
        className="mb-4 float-end"
        onClick={() =>
          client
            .updateTodo({ id: Number(todo.id), completed: todo.completed })
            .then((updated) =>
              setTodos(
                todos.map((t) => (t.id === updated.id ? updated : t))
              )
            )
            .catch(console.error)
        }
      >
        Complete Todo ID = {todo.id}
      </Button>
      <div style={{ clear: "both" }} />

      {/* Updating Description */}
      <h4>Updating Description</h4>
      <FormControl
        type="number"
        className="w-25 float-start me-2 mb-2"
        value={todo.id}
        onChange={(e) => setTodo((f) => ({ ...f, id: e.target.value }))}
      />
      <FormControl
        type="text"
        className="w-50 float-start me-2 mb-2"
        value={todo.description}
        onChange={(e) =>
          setTodo((f) => ({ ...f, description: e.target.value }))
        }
      />
      <Button
        id="wd-update-todo-description"
        className="mb-4 float-end"
        onClick={() =>
          client
            .updateTodo({ id: Number(todo.id), description: todo.description })
            .then((updated) =>
              setTodos(
                todos.map((t) => (t.id === updated.id ? updated : t))
              )
            )
            .catch(console.error)
        }
      >
        Describe Todo ID = {todo.id}
      </Button>
    </div>
  );
}
