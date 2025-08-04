// src/Labs/Lab5/WorkingWithArrays.tsx
import React, { useState } from "react";
import { FormControl, FormCheck } from "react-bootstrap";

const REMOTE_SERVER =
  import.meta.env.VITE_REMOTE_SERVER ?? "http://localhost:4000";

export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "",
    description: "",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      {/* Retrieve all (and filter) */}
      <h4>Retrieving Arrays</h4>
      <a
        id="wd-retrieve-todos"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/todos`}
      >
        Get Todos
      </a>

      <h4>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/todos?completed=true`}
      >
        Get Completed Todos
      </a>

      {/* Create */}
      <h4>Creating New Items in an Array</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/todos/create`}
      >
        Create Todo
      </a>

      {/* Retrieve by ID */}
      <h4>Retrieving an Item from an Array by ID</h4>
      <FormControl
        id="wd-todo-id"
        type="number"
        className="w-25"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a
        id="wd-todo-by-id"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/todos/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <hr />

      {/* Delete */}
      <h4>Deleting from an Array</h4>
      <FormControl
        id="wd-todo-delete-id"
        type="number"
        className="w-25"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a
        id="wd-delete-todo"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/todos/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}
      </a>
      <hr />

      {/* Update title */}
      <h4>Updating an Item in an Array</h4>
      <FormControl
        id="wd-todo-id-update"
        type="number"
        className="w-25 float-start me-2"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <FormControl
        id="wd-todo-title"
        type="text"
        className="w-50"
        defaultValue={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <a
        id="wd-update-todo-title"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/todos/${todo.id}/title/${todo.title}`}
      >
        Update Todo
      </a>
      <hr />

      {/* On Your Own: completed & description */}
      <h4>Updating Completed</h4>
      <FormControl
        id="wd-todo-id-complete"
        type="number"
        className="w-25 float-start me-2"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <FormCheck
        id="wd-todo-completed"
        className="float-start me-2"
        label="Completed?"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({ ...todo, completed: e.target.checked })
        }
      />
      <a
        id="wd-update-todo-completed"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/todos/${todo.id}/completed/${todo.completed}`}
      >
        Complete Todo ID = {todo.id}
      </a>
      <hr />

      <h4>Updating Description</h4>
      <FormControl
        id="wd-todo-id-desc"
        type="number"
        className="w-25 float-start me-2"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <FormControl
        id="wd-todo-description"
        type="text"
        className="w-50 float-start me-2"
        defaultValue={todo.description}
        onChange={(e) =>
          setTodo({ ...todo, description: e.target.value })
        }
      />
      <a
        id="wd-update-todo-description"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/todos/${todo.id}/description/${todo.description}`}
      >
        Describe Todo ID = {todo.id}
      </a>
      <hr />
    </div>
  );
}
