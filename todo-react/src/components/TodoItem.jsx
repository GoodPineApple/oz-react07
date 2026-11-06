// 할 일 한 줄 — 체크는 완료, 삭제는 지우기. TodosPage가 넘긴 함수로 알립니다
function TodoItem({ todo, onToggle, onDelete }) {
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
