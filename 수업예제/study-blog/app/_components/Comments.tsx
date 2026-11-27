"use client";

import { useEffect, useState } from "react";

// 연습용 API(JSONPlaceholder)가 보내는 댓글 하나 — 쓰는 칸만 적음
interface Comment {
  id: number;
  name: string;
  body: string;
}

// 이 컴포넌트가 받는 props — 글 번호
interface CommentsProps {
  postId: number;
}

// 글 아래 댓글 — 브라우저에서 연습용 API에 요청해 받아 옴
export default function Comments({ postId }: CommentsProps) {
  // 아직 받지 않았으면 null
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false; // 정리되면 true — 늦게 온 답은 버림

    async function load() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
        );
        if (!response.ok) {
          throw new Error(`${response.status} 오류`);
        }
        // json()은 any — 받을 모양을 적어 둠
        const data: Comment[] = await response.json();
        if (!ignore) setComments(data);
      } catch (err) {
        // catch로 받은 값은 unknown — Error인지 확인하고 씀
        const message = err instanceof Error ? err.message : "알 수 없는 오류";
        if (!ignore) setError(message);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, [postId]);

  if (error) {
    return <p className="error">댓글을 불러오지 못했습니다 — {error}</p>;
  }

  if (comments === null) {
    return <p className="status">댓글을 불러오는 중…</p>;
  }

  return (
    <section className="comments">
      <h2>댓글 {comments.length}개</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
