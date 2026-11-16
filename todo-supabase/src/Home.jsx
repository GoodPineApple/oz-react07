import { useEffect, useState } from "react";
import { supabase } from "./supabase.js";

// 입력 칸의 클래스 — 긴 클래스는 변수에 담아 나눠 적습니다 (LoginForm과 같은 방식)
const inputClass =
  "min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 " +
  "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200";

// 로그인한 사람의 화면 — 할 일은 Supabase의 todos 표에 한 줄씩
function Home({ user }) {
  const [todos, setTodos] = useState([]); // todos 표에서 받은 내 할 일
  const [text, setText] = useState(""); // 입력 칸의 글
  const [message, setMessage] = useState(""); // 실패했을 때의 오류

  // R — 내 할 일을 적은 순서로 받기 : 화면에 처음 나올 때 한 번
  useEffect(() => {
    async function loadTodos() {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at");
      if (error) {
        setMessage(error.message);
        return;
      }
      setTodos(data);
    }
    loadTodos();
  }, [user.id]);

  // C — 새 줄 넣기 (id · done · created_at은 DB가 채움)
  async function handleAdd(e) {
    e.preventDefault();
    if (text.trim() === "") return;
    const { data, error } = await supabase
      .from("todos")
      .insert({ user_id: user.id, text: text.trim() })
      .select()
      .single();
    if (error) {
      setMessage(error.message);
      return;
    }
    setTodos([...todos, data]);
    setText("");
  }

  // U — 끝냄 표시 뒤집기 : 표에서 id가 같은 줄의 done을 고침
  async function toggleDone(todo) {
    const { error } = await supabase
      .from("todos")
      .update({ done: !todo.done })
      .eq("id", todo.id);
    if (error) {
      setMessage(error.message);
      return;
    }
    // 화면도 같게 — 그 id만 done을 뒤집은 새 배열 (DAY 30 handleToggle)
    const nextTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, done: !todo.done };
      }
      return t;
    });
    setTodos(nextTodos);
  }

  // D — 표에서 id가 같은 줄을 지움
  async function removeTodo(todo) {
    const { error } = await supabase
      .from("todos")
      .delete()
      .eq("id", todo.id);
    if (error) {
      setMessage(error.message);
      return;
    }
    // 화면의 목록에서도 뺌
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <div className="w-full md:max-w-sm md:rounded-2xl md:bg-white md:p-8 md:shadow-lg">
      <h2 className="text-xl font-bold">반가워요!</h2>

      <form onSubmit={handleAdd} className="mt-6 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 적어 주세요"
          className={inputClass}
        />
        <button className="rounded-lg bg-blue-600 px-4 font-bold text-white hover:bg-blue-700">
          추가
        </button>
      </form>
      {message && <p className="mt-3 text-sm text-red-600">{message}</p>}

      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2">
            <label className="flex flex-1 items-center gap-3">
              <input type="checkbox" checked={todo.done} onChange={() => toggleDone(todo)} />
              <span className={todo.done ? "text-slate-400 line-through" : ""}>{todo.text}</span>
            </label>
            <button
              type="button"
              onClick={() => removeTodo(todo)}
              className="text-sm text-red-600 hover:underline"
            >
              지우기
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
