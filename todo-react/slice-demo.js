// createSlice가 만든 것 보기 — 터미널에서 node slice-demo.js
import todosReducer, { todoAdded } from "./src/features/todos/todosSlice.js";

const action = todoAdded({ id: 4, text: "우유 사기", done: false });
console.log("액션", action);

const before = [{ id: 1, text: "React 문서 읽기", done: true }];
const after = todosReducer(before, action); // reducer를 직접 불러 봄
console.log("전", before);
console.log("후", after);
console.log("같은 배열?", before === after);
