"use client";

import { useState } from "react";
import Link from "next/link";
import type { Post } from "@/lib/posts";

// 이 컴포넌트가 받는 props — 글 목록
interface PostSearchProps {
  posts: Post[];
}

// 글 찾기 — 입력한 글자가 든 글만 보임 (클라이언트 컴포넌트)
export default function PostSearch({ posts }: PostSearchProps) {
  const [keyword, setKeyword] = useState(""); // 처음 값이 글자라 string

  // 입력 칸이 바뀔 때 — e는 input 요소의 change 이벤트
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  const visiblePosts = posts.filter(
    (post) => post.title.includes(keyword) || post.summary.includes(keyword),
  );

  return (
    <>
      <input
        className="search"
        value={keyword}
        onChange={handleChange}
        placeholder="제목이나 요약으로 찾기"
      />
      {visiblePosts.length === 0 && <p className="status">찾는 글이 없습니다</p>}
      <ul className="post-list">
        {visiblePosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
