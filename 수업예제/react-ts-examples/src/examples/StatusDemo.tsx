import { useState } from "react";

// union state — 정해진 값 몇 개만 (react.dev — Using TypeScript의 예)
type Status = "idle" | "loading" | "success" | "error";

export default function StatusDemo() {
  const [status, setStatus] = useState<Status>("idle");

  return (
    <div>
      <p>지금 : {status}</p>
      <button onClick={() => setStatus("loading")}>loading</button>
      <button onClick={() => setStatus("success")}>success</button>
      <button onClick={() => setStatus("idle")}>idle</button>
    </div>
  );
}
