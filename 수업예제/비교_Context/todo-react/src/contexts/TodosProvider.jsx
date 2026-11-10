import { useState } from "react";
import { TodosContext } from "./TodosContext.js";

// 처음 보여 줄 할 일 — Redux 판과 같은 셋
const initialTodos = [
  { id: 1, text: "React 문서 읽기", done: true },
  { id: 2, text: "React 복습하기", done: false },
  { id: 3, text: "운동하러 가기", done: false },
];

// 할 일과 바꾸는 함수를 Context로 나눠 주는 제공자 — DAY 37의 AuthProvider와 같은 모양
function TodosProvider({ children }) {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(text) {
    setTodos([...todos, { id: crypto.randomUUID(), text: text, done: false }]);
  }

  function toggleTodo(id) {
    const nextTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(nextTodos);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <TodosContext value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodosContext>
  );
}

export default TodosProvider;
