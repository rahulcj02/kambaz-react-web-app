// src/Labs/Lab5/WorkingWithArraysAsynchronously.tsx
import { useState, useEffect } from "react";
import * as client from "./client";
import { ListGroup, FormControl } from "react-bootstrap";
import { FaTrash, FaRegTimesCircle, FaPlusCircle, FaPencilAlt as FaPencil } from "react-icons/fa";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 1) load todos
  const fetchTodos = async () => {
    try {
      const data = await client.fetchTodos();
      setTodos(data);
      setErrorMessage(null);
    } catch (e: any) {
      setErrorMessage(e.response?.data?.message || e.message);
    }
  };

  // 2) legacy remove
  const removeTodoLegacy = async (todo: any) => {
    const updated = await client.removeTodo(todo);
    setTodos(updated);
  };

  // 3) proper delete with error handling
  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      setTodos((ts) => ts.filter((t) => t.id !== todo.id));
      setErrorMessage(null);
    } catch (e: any) {
      setErrorMessage(e.response?.data?.message || e.message);
    }
  };

  // 4) legacy create
  const createTodoLegacy = async () => {
    const updated = await client.createTodoLegacy();
    setTodos(updated);
  };

  // 5) proper POST-create
  const postTodo = async () => {
    const newTodo = await client.postTodo({
      title: "New Posted Todo",
      completed: false,
      description: "",
    });
    setTodos((ts) => [...ts, newTodo]);
  };

  // 6) start editing
  const editTodo = (id: number) => {
    setErrorMessage(null);
    setTodos((ts) => ts.map((t) => (t.id === id ? { ...t, editing: true } : t)));
  };

  // 7) PUT-update with error handling
  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos((ts) =>
        ts.map((t) => (t.id === todo.id ? { ...todo, editing: false } : t))
      );
      setErrorMessage(null);
    } catch (e: any) {
      setErrorMessage(e.response?.data?.message || e.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>

      {/* Error banner */}
      {errorMessage && (
        <div id="wd-todo-error-message" className="alert alert-danger mb-2">
          {errorMessage}
        </div>
      )}

      {/* Create icons */}
      <h4>
        Todos (click on edit to complete a todo)
        <FaPlusCircle
          onClick={createTodoLegacy}
          className="text-success float-end fs-3 me-3"
          id="wd-create-todo"
        />
        <FaPlusCircle
          onClick={postTodo}
          className="text-primary float-end fs-3"
          id="wd-post-todo"
        />
      </h4>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>
            {/* Legacy delete */}
            <FaTrash
              onClick={() => removeTodoLegacy(todo)}
              className="text-danger float-end me-2"
              id="wd-remove-todo-legacy"
            />
            {/* Proper delete */}
            <FaRegTimesCircle
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end me-2 fs-4"
              id="wd-delete-todo"
            />
            {/* Pencil (edit) */}
            <FaPencil
              onClick={() => editTodo(todo.id)}
              className="text-primary float-end me-2 fs-4"
              id="wd-edit-todo"
            />

            {/* Editing mode? */}
            {todo.editing ? (
              <>
                <FormControl
                  className="w-50 float-start"
                  value={todo.title}
                  autoFocus
                  onChange={(e) =>
                    setTodos((ts) =>
                      ts.map((t) =>
                        t.id === todo.id ? { ...t, title: e.target.value } : t
                      )
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") updateTodo({ ...todo, title: todo.title });
                  }}
                />
                <FormControl
                  type="checkbox"
                  className="form-check-input me-2 float-start"
                  checked={todo.completed}
                  onChange={(e) =>
                    updateTodo({ ...todo, completed: (e.target as HTMLInputElement).checked })
                  }
                />
              </>
            ) : (
              <>
                <FormControl
                  type="checkbox"
                  className="form-check-input me-2"
                  defaultChecked={todo.completed}
                  readOnly
                />
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                  {todo.title}
                </span>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
