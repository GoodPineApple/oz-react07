import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "./firebase.js";

// 입력 칸의 클래스 — 긴 클래스는 변수에 담아 나눠 적습니다 (LoginForm과 같은 방식)
const inputClass =
  "min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 " +
  "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200";

// 로그인한 사람에게 보이는 화면 — 할 일은 Firestore의 users/{내 uid}/todos에 저장합니다
function Home({ user }) {
  const [todos, setTodos] = useState([]); // Firestore에서 받은 내 할 일
  const [text, setText] = useState(""); // 입력 칸의 글
  const [message, setMessage] = useState(""); // 실패했을 때의 오류 코드

  const showError = (error) => setMessage(error.code);

  // R — 내 할 일을 적은 순서로 듣기 : 처음 한 번, 그 뒤로는 바뀔 때마다 불림
  useEffect(() => {
    const q = query(collection(db, "users", user.uid, "todos"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setTodos(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      },
      showError,
    );
    return unsubscribe; // 화면에서 사라지면 듣기를 멈춤
  }, [user.uid]);

  // C — 새 문서 만들기 (문서 ID는 Firestore가 붙임)
  function handleAdd(e) {
    e.preventDefault();
    if (text.trim() === "") return;
    addDoc(collection(db, "users", user.uid, "todos"), {
      text: text.trim(),
      done: false,
      createdAt: serverTimestamp(),
    }).catch(showError);
    setText("");
  }

  // U — 끝냄 표시 뒤집기
  function toggleDone(todo) {
    const ref = doc(db, "users", user.uid, "todos", todo.id);
    updateDoc(ref, { done: !todo.done }).catch(showError);
  }

  // D — 문서 지우기
  function removeTodo(todo) {
    const ref = doc(db, "users", user.uid, "todos", todo.id);
    deleteDoc(ref).catch(showError);
  }

  return (
    <div className="w-full md:max-w-sm md:rounded-2xl md:bg-white md:p-8 md:shadow-lg">
      <h2 className="text-xl font-bold">반가워요!</h2>
      <p className="mt-1 text-sm text-slate-500">{user.email}</p>

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

      <button
        type="button"
        onClick={() => signOut(auth)}
        className="mt-6 w-full rounded-lg border border-slate-300 py-2.5 font-bold text-slate-700 hover:bg-slate-50"
      >
        로그아웃
      </button>
    </div>
  );
}

export default Home;
