import { createSlice } from "@reduxjs/toolkit";

// 처음 보여 줄 할 일 — DAY 30 · 31과 같은 셋
const initialState = [
  { id: 1, text: "React 문서 읽기", done: true },
  { id: 2, text: "React 복습하기", done: false },
  { id: 3, text: "운동하러 가기", done: false },
];

// 할 일 조각(slice) — 이름 · 처음 값 · 바꾸는 방법(reducer)을 한곳에 적으면
// createSlice가 액션을 만드는 함수(action creator)와 reducer를 만들어 줍니다
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // 추가 — payload는 새 할 일 객체(id는 보내는 쪽에서 만듦)
    todoAdded(state, action) {
      state.push(action.payload);
    },
    // 완료 처리 — payload는 id
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
    },
    // 삭제 — payload는 id, 그 id가 아닌 것만 남긴 새 배열을 돌려줌
    todoDeleted(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { todoAdded, todoToggled, todoDeleted } = todosSlice.actions;
export default todosSlice.reducer;

// 꺼내는 함수(selector) — 여러 컴포넌트가 같은 계산을 되풀이하지 않게 한곳에 둡니다
export const selectTodos = (state) => state.todos;
export const selectLeftCount = (state) =>
  state.todos.filter((todo) => !todo.done).length;
