import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";

// 입력 칸 둘이 함께 쓰는 클래스 — 긴 클래스는 변수에 담아 나눠 적습니다
const inputClass =
  "mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 " +
  "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 " +
  "dark:border-slate-600 dark:bg-slate-700";

// Firebase 오류 코드를 화면에 보일 글로 — 표에 없는 코드는 코드 그대로 보여 줍니다
const errorMessages = {
  "auth/email-already-in-use": "이미 가입한 이메일입니다",
  "auth/weak-password": "비밀번호는 6자 이상이어야 합니다",
  "auth/invalid-email": "이메일 형식이 맞지 않습니다",
  "auth/invalid-credential": "이메일 또는 비밀번호가 맞지 않습니다",
};

// 로그인 · 회원가입 폼 — 성공하면 AuthProvider의 onAuthStateChanged가 홈 화면으로 바꿉니다
function LoginForm() {
  const [mode, setMode] = useState("login"); // "login" 또는 "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const isSignup = mode === "signup";

  async function handleSubmit(e) {
    e.preventDefault();
    if (email.trim() === "" || password === "") {
      setMessage("이메일과 비밀번호를 입력해 주세요");
      return;
    }
    setMessage("");
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email.trim(), password);
      } else {
        await signInWithEmailAndPassword(auth, email.trim(), password);
      }
    } catch (error) {
      setMessage(errorMessages[error.code] ?? error.code);
    }
  }

  // 로그인 ↔ 회원가입 바꾸기 — 앞의 안내 글은 지웁니다
  function toggleMode() {
    setMode(isSignup ? "login" : "signup");
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:max-w-sm md:rounded-2xl md:bg-white md:p-8 md:shadow-lg md:dark:bg-slate-800"
    >
      <h2 className="text-xl font-bold">{isSignup ? "회원가입" : "로그인"}</h2>
      <label className="mt-6 block text-sm font-bold text-slate-700 dark:text-slate-200">
        이메일
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </label>
      <label className="mt-4 block text-sm font-bold text-slate-700 dark:text-slate-200">
        비밀번호
        <input
          type="password"
          name="password"
          autoComplete={isSignup ? "new-password" : "current-password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />
      </label>
      {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
      <button className="mt-6 w-full rounded-lg bg-blue-600 py-2.5 font-bold text-white hover:bg-blue-700">
        {isSignup ? "가입하기" : "로그인"}
      </button>
      <button
        type="button"
        onClick={toggleMode}
        className="mt-3 w-full text-sm text-blue-600 hover:underline"
      >
        {isSignup ? "이미 가입했다면 로그인" : "처음이라면 회원가입"}
      </button>
    </form>
  );
}

export default LoginForm;
