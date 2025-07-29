import { ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

interface Todo {
  id: string;
  title: string;
}

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item key={todo.id}>
      <Button
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
        variant="danger"
        size="sm"
      >
        Delete
      </Button>{" "}
      <Button
        onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
        variant="secondary"
        size="sm"
      >
        Edit
      </Button>{" "}
      {todo.title}
    </ListGroup.Item>
  );
}
