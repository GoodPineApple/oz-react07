import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext.js";
import TodoForm from "../components/TodoForm.jsx";
import TodoList from "../components/TodoList.jsx";

const filters = ["전체", "할 일", "완료"];

// 내 할 일(/todos) — 할 일은 Context에서 꺼내고, 바꾸는 일은 TodoForm · TodoItem이 직접 합니다
function TodosPage({ user }) {
  const { todos } = useContext(TodosContext);
  const [filter, setFilter] = useState("전체"); // 이 페이지만 쓰는 값 — 지역 state 그대로

  // 보여 줄 할 일 — 계산합니다(state로 두지 않음)
  const visibleTodos = todos.filter((todo) => {
    if (filter === "할 일") {
      return !todo.done;
    }
    if (filter === "완료") {
      return todo.done;
    }
    return true;
  });
  const leftCount = todos.filter((todo) => !todo.done).length;

  return (
    <main className="todo-app">
      <h1>{user}님의 할 일</h1>
      <TodoForm />
      <div className="filters">
        {filters.map((item) => (
          <button
            key={item}
            className={item === filter ? "is-active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <TodoList todos={visibleTodos} />
      <p className="count">남은 일 {leftCount}개</p>
    </main>
  );
}

export default TodosPage;
