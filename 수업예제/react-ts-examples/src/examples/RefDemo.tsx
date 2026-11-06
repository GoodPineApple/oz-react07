import { useRef } from "react";

// useRef — 처음 값은 null, 화면에 붙은 뒤에야 input이 들어옴
export default function RefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus(); // null일 수도 있어 ?.로 꺼냄
  }

  return (
    <div>
      <input ref={inputRef} placeholder="여기로 커서가 옴" />
      <button onClick={handleFocus}>입력 칸으로</button>
    </div>
  );
}
