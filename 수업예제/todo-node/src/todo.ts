// Node로 돌리는 할 일 목록 — npx tsc로 dist/todo.js를 만든 뒤 node로 실행

// 할 일 하나의 모양 — memo는 없어도 되는 칸(선택 속성)
interface Todo {
  id: string;
  text: string;
  done: boolean;
  memo?: string;
}

const todos: Todo[] = [
  { id: "1", text: "React 문서 읽기", done: true, memo: "TypeScript 장까지" },
  { id: "2", text: "React 복습하기", done: false },
];

// 할 일마다 한 줄 — 메모가 있으면 한 줄 더
todos.forEach((todo) => {
  const mark = todo.done ? "완료" : "할 일";
  console.log(`${mark} — ${todo.text}`);
  if (todo.memo) {
    console.log(`  메모 : ${todo.memo}`);
  }
});
