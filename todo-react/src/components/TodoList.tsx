import type { Todo } from "../types.ts";
import TodoItem from "./TodoItem.tsx";

// 이 컴포넌트가 받는 props — 보여 줄 할 일과 App이 넘긴 함수 둘
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

// 할 일 목록 — 보여 줄 할 일이 없으면 목록 대신 안내 글을 돌려줍니다
function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="empty">보여 줄 할 일이 없습니다.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
