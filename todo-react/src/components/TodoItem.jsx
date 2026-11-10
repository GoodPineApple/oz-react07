import { useDispatch } from "react-redux";
import { todoDeleted, todoToggled } from "../features/todos/todosSlice.js";

// 할 일 한 줄 — 체크는 완료, 삭제는 지우기. store에 직접 알립니다(함수를 props로 받지 않음)
function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <li className={todo.done ? "todo-item done" : "todo-item"}>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => dispatch(todoToggled(todo.id))}
        />
        <span>{todo.text}</span>
      </label>
      <button onClick={() => dispatch(todoDeleted(todo.id))}>삭제</button>
    </li>
  );
}

export default TodoItem;
