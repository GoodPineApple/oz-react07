"use client";

import { useState } from "react";

// 공감 단추 — 누를 때마다 숫자가 늘어남 (브라우저에서 도는 클라이언트 컴포넌트)
export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button type="button" className="like" onClick={() => setLikes(likes + 1)}>
      공감 {likes}
    </button>
  );
}
