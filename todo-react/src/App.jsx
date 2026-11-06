import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

// 처음 보여 줄 할 일 — id는 목록의 key와, 고치거나 지울 할 일을 찾는 데 씁니다
const initialTodos = [
  { id: 1, text: "React 문서 읽기", done: true },
  { id: 2, text: "React 복습하기", done: false },
  { id: 3, text: "운동하러 가기", done: false },
];
const filters = ["전체", "할 일", "완료"];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("전체");

  // 추가 — 이전 할 일을 펼치고 끝에 새 할 일을 붙인 새 배열
  function handleAdd(text) {
    setTodos([...todos, { id: crypto.randomUUID(), text: text, done: false }]);
  }

  // 완료 처리 — 그 id만 done을 뒤집은 새 객체로 바꾼 새 배열
  function handleToggle(id) {
    const nextTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(nextTodos);
  }

  // 삭제 — 그 id가 아닌 것만 남긴 새 배열
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // 보여 줄 할 일 · 남은 수 — 계산합니다(state로 두지 않음)
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
      <h1>오늘의 할 일</h1>
      <TodoForm onAdd={handleAdd} />
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
      <TodoList
        todos={visibleTodos} onToggle={handleToggle} onDelete={handleDelete}
      />
      <p className="count">남은 일 {leftCount}개</p>
    </main>
  );
}

export default App;
