import { useState } from "react";

// 입력 칸 둘이 함께 쓰는 클래스 — 긴 클래스는 변수에 담아 나눠 적습니다
const inputClass =
  "mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 " +
  "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200";

// 이메일 · 비밀번호를 받는 폼 — 실제 로그인은 DAY 33(Firebase)에서 붙입니다
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim() === "" || password === "") {
      setMessage("이메일과 비밀번호를 입력해 주세요");
      return;
    }
    setMessage("");
    console.log("로그인 :", email); // 오늘은 화면만 — 받은 값은 Console에서 확인
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:max-w-sm md:rounded-2xl md:bg-white md:p-8 md:shadow-lg"
    >
      <h2 className="text-xl font-bold">로그인</h2>
      <label className="mt-6 block text-sm font-bold text-slate-700">
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
      <label className="mt-4 block text-sm font-bold text-slate-700">
        비밀번호
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />
      </label>
      {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
      <button className="mt-6 w-full rounded-lg bg-blue-600 py-2.5 font-bold text-white hover:bg-blue-700">
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
