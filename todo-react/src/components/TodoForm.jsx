import { useState } from "react";

// 할 일 입력 — 입력 칸의 글은 이 컴포넌트의 state가 정합니다(controlled component)
function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();   // 페이지를 새로 열지 않기 — DAY 16과 같음
    const trimmed = text.trim();
    if (trimmed === "") {
      setMessage("할 일을 입력해 주세요");
      return;
    }
    onAdd(trimmed);
    setText("");
    setMessage("");
  }

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          name="todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={20}
          placeholder="할 일을 입력하고 Enter"
        />
        <button type="submit">추가</button>
      </form>
      {message && <p className="msg">{message}</p>}
    </>
  );
}

export default TodoForm;
