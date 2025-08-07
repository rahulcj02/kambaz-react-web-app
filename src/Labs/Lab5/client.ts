// src/Labs/Lab5/client.ts
import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER ?? "http://localhost:4000";
const TODOS_API     = `${REMOTE_SERVER}/lab5/todos`;

// 5.2.5.1 Welcome endpoint
export const fetchWelcomeMessage = async () =>
  (await axios.get(`${REMOTE_SERVER}/lab5/welcome`)).data;

// 5.2.5.5 Assignment endpoints
export const fetchAssignment = async () =>
  (await axios.get(`${REMOTE_SERVER}/lab5/assignment`)).data;

export const updateTitle = async (title: string) =>
  (await axios.get(`${REMOTE_SERVER}/lab5/assignment/title/${title}`)).data;

// 5.2.5.6 Fetch all todos
export const fetchTodos = async () =>
  (await axios.get(TODOS_API)).data;

// 5.2.5.7 Legacy DELETE via GET
export const removeTodo = async (todo: any) =>
  (await axios.get(`${TODOS_API}/${todo.id}/delete`)).data;

// 5.2.5.7 Proper DELETE
export const deleteTodo = async (todo: any) => {
  await axios.delete(`${TODOS_API}/${todo.id}`);
  return todo;
};

// 5.2.5.8 Legacy CREATE via GET
export const createTodoLegacy = async () => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data; // full updated array
};

// 5.2.5.8 Proper CREATE via POST
export const postTodo = async (todo: any) =>
  (await axios.post(TODOS_API, todo)).data;


export const updateTodo = async (todo: any) => {
  // send the full todo object in the body
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};
