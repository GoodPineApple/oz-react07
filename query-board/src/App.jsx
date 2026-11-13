import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getJSON } from "./api.js";
import PostDetail from "./components/PostDetail.jsx";

// 글 100개 — DAY 18~21에서 쓴 JSONPlaceholder
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const AUTHORS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 작성자 번호(userId)

// 고른 작성자의 글만 — 아직 받지 못했으면(null) 빈 배열
function filterPosts(posts, author) {
  if (!posts) return [];
  return posts.filter((post) => post.userId === author);
}

export default function App() {
  // 1. 받아 오는 일은 useQuery에 — 이름표(queryKey)와 받는 함수(queryFn)
  const { data: posts, error, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getJSON(POSTS_URL),
  });
  const [author, setAuthor] = useState(1); // 고른 작성자
  const [selectedId, setSelectedId] = useState(null); // 고른 글 번호

  const authorPosts = filterPosts(posts, author);
  const selectedPost = authorPosts.find((post) => post.id === selectedId);

  return (
    <div className="board">
      <header className="top">
        <h1>게시판 읽기</h1>
        <label>
          작성자{" "}
          <select
            name="author"
            value={author}
            onChange={(e) => setAuthor(Number(e.target.value))}
          >
            {AUTHORS.map((n) => (
              <option key={n} value={n}>
                {n}번
              </option>
            ))}
          </select>
        </label>
      </header>

      <section className="panel">
        <h2>글 목록</h2>
        {isPending && <p className="status">글을 불러오는 중…</p>}
        {error && (
          <p className="status error">불러오지 못했습니다 — {error.message}</p>
        )}
        {posts && (
          <ul className="posts">
            {authorPosts.map((post) => (
              <li key={post.id}>
                <button
                  className={post.id === selectedId ? "title selected" : "title"}
                  onClick={() => setSelectedId(post.id)}
                >
                  {post.id}. {post.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* 2. 고른 글 — 글이 바뀌면 key가 바뀌어 새로 그림(한 번 받은 댓글은 캐시에서 바로) */}
      {selectedPost ? (
        <PostDetail key={selectedPost.id} post={selectedPost} />
      ) : (
        <p className="panel status">글을 고르면 본문과 댓글이 여기에 나옵니다</p>
      )}
    </div>
  );
}
