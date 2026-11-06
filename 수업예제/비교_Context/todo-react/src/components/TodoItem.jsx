import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext.js";

// 할 일 한 줄 — 체크는 완료, 삭제는 지우기. Context의 함수로(props로 받지 않음)
function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useContext(TodosContext);
  return (
    <li className={todo.done ? "todo-item done" : "todo-item"}>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
      </label>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
