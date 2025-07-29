import { ListGroup, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const todo = useSelector((state: RootState) => state.todosReducer.todo);
  const dispatch = useDispatch();

  return (
    <ListGroup.Item>
      <Button
        onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"
      >
        Add
      </Button>{" "}
      <Button
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
      >
        Update
      </Button>{" "}
      <FormControl
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        placeholder="New todo"
      />
    </ListGroup.Item>
  );
}
