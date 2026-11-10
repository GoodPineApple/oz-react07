import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice.js";

// 앱의 state 보관함 — todos 칸은 todosSlice의 reducer가 맡음
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
