import type { Todo } from "../types.ts";

// 이 컴포넌트가 받는 props — 할 일 하나와 App이 넘긴 함수 둘
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

// 할 일 한 줄 — 체크는 완료, 삭제는 지우기. App이 넘긴 함수로 알립니다
function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={todo.done ? "todo-item done" : "todo-item"}>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </label>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
