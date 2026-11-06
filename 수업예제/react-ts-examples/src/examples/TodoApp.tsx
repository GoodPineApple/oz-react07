// 데이터 fetch (import React 줄을 빼고 export를 더함)
import { useState, useEffect } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((data: Todo[]) => setTodos(data));
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} {todo.completed ? "(Done)" : ""}
        </li>
      ))}
    </ul>
  );
}
