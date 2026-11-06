// 배열 state (import React 줄을 뺌)
import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (todo: string) => {
      setTodos([...todos, todo]);
    };

    return (
      <div>
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTodo(e.currentTarget.value);
          }}
        />
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }

export default TodoList;
