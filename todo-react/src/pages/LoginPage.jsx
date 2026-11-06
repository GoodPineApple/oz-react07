import { useState } from "react";
import { useNavigate } from "react-router";

// 로그인 — 오늘은 이름만 받아 App에 알리고, 내 할 일로 이동합니다(진짜 로그인은 DAY 33 Firebase)
function LoginPage({ onLogin }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed === "") {
      setMessage("이름을 입력해 주세요");
      return;
    }
    onLogin(trimmed);
    navigate("/todos"); // 로그인이 끝난 뒤 코드로 이동 — useNavigate
  }

  return (
    <main className="todo-app">
      <h1>로그인</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <button type="submit">로그인</button>
      </form>
      {message && <p className="msg">{message}</p>}
    </main>
  );
}

export default LoginPage;
