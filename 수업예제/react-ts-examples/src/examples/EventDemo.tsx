import { useState } from "react";

// 이벤트 타입 — 핸들러를 따로 함수로 빼면 매개변수 e에 타입을 적음
export default function EventDemo() {
  const [name, setName] = useState("");
  const [log, setLog] = useState("아직 없음");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") setName("");
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setLog(`${e.currentTarget.textContent} — x ${e.clientX}`);
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setLog(`보냄 : ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={handleChange} onKeyDown={handleKeyDown} />
      <button type="button" onClick={handleClick}>눌러 보기</button>
      <button type="submit">보내기</button>
      <p>{log}</p>
    </form>
  );
}
