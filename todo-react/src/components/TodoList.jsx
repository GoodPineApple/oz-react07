import TodoItem from "./TodoItem.jsx";

// 할 일 목록 — 보여 줄 할 일이 없으면 목록 대신 안내 글을 돌려줍니다
function TodoList({ todos }) {
  if (todos.length === 0) {
    return <p className="empty">보여 줄 할 일이 없습니다.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
