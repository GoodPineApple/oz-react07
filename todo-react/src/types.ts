// 할 일 하나의 모양 — App · TodoList · TodoItem이 함께 씀
export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

// 거르는 방법 — 세 값 가운데 하나
export type Filter = "전체" | "할 일" | "완료";
