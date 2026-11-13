import { create } from "zustand";

// 처음 보여 줄 할 일 — Redux 판과 같은 셋
const initialTodos = [
  { id: 1, text: "React 문서 읽기", done: true },
  { id: 2, text: "React 복습하기", done: false },
  { id: 3, text: "운동하러 가기", done: false },
];

// 할 일 store — 값과 바꾸는 함수를 한 객체에 적으면 create가 hook을 만들어 줍니다
export const useTodosStore = create((set) => ({
  todos: initialTodos,

  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: crypto.randomUUID(), text: text, done: false }],
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      }),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

// 꺼내는 함수(selector) — 남은 수는 state에 두지 않고 계산합니다
export const selectLeftCount = (state) =>
  state.todos.filter((todo) => !todo.done).length;
