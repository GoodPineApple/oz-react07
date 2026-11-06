import { useEffect, useState } from "react";

// 글 100개 — DAY 18~21에서 쓴 JSONPlaceholder
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const AUTHORS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 작성자 번호(userId)

// 고른 작성자의 글만 — 아직 받지 못했으면(null) 빈 배열
function filterPosts(posts, author) {
  if (!posts) return [];
  return posts.filter((post) => post.userId === author);
}

export default function App() {
  // 1. 상태 셋 — 성공(받은 글) · 에러 · 로딩
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState(1); // 고른 작성자

  // 2. 처음 그린 뒤 — 글을 받아 옴
  useEffect(() => {
    let ignore = false; // 정리되면 true — 늦게 온 답은 버림

    async function load() {
      try {
        const response = await fetch(POSTS_URL);
        if (!response.ok) {
          throw new Error(`${response.status} 오류`);
        }
        const json = await response.json();
        if (!ignore) setPosts(json);
      } catch (err) {
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  const authorPosts = filterPosts(posts, author);

  // 3. 로딩 · 에러 · 성공 — 셋 가운데 하나를 그림
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
        {loading && <p className="status">글을 불러오는 중…</p>}
        {error && (
          <p className="status error">불러오지 못했습니다 — {error.message}</p>
        )}
        {posts && (
          <ul className="posts">
            {authorPosts.map((post) => (
              <li key={post.id}>
                <span className="title">
                  {post.id}. {post.title}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
