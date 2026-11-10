import { lazy, Suspense, useCallback, useMemo, useState } from "react";
import useFetch from "./hooks/useFetch.js";
import PostItem from "./components/PostItem.jsx";

// 글 100개 — DAY 18~21에서 쓴 JSONPlaceholder
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const AUTHORS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 작성자 번호(userId)

// 글 보기 — 글을 처음 고를 때 따로 받아 오는 파일
const PostDetail = lazy(() => import("./components/PostDetail.jsx"));

// 고른 작성자의 글만 — 아직 받지 못했으면(null) 빈 배열
function filterPosts(posts, author) {
  console.log("글 거르기"); // 몇 번 거르는지 세어 보기
  if (!posts) return [];
  return posts.filter((post) => post.userId === author);
}

export default function App() {
  const { data: posts, error, loading } = useFetch(POSTS_URL);
  const [author, setAuthor] = useState(1); // 고른 작성자
  const [selectedId, setSelectedId] = useState(null); // 고른 글 번호
  const [likedIds, setLikedIds] = useState([]); // ★를 누른 글 번호들

  // posts · author가 그대로면 지난번에 거른 결과를 다시 씀
  const authorPosts = useMemo(
    () => filterPosts(posts, author),
    [posts, author],
  );
  const selectedPost = authorPosts.find((post) => post.id === selectedId);

  // PostItem에 내려보내는 함수 둘 — 다시 그려도 같은 함수를 씀
  const selectPost = useCallback((id) => {
    setSelectedId(id);
  }, []);
  const toggleLike = useCallback((id) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  return (
    <div className="board">
      <header className="top">
        <h1>게시판 읽기</h1>
        <p className="liked-count">관심 글 {likedIds.length}개</p>
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
              <PostItem
                key={post.id}
                post={post}
                selected={post.id === selectedId}
                liked={likedIds.includes(post.id)}
                onSelect={selectPost}
                onToggleLike={toggleLike}
              />
            ))}
          </ul>
        )}
      </section>

      {selectedPost ? (
        <Suspense fallback={<p className="panel status">글 보기를 여는 중…</p>}>
          <PostDetail key={selectedPost.id} post={selectedPost} />
        </Suspense>
      ) : (
        <p className="panel status">글을 고르면 본문과 댓글이 여기에 나옵니다</p>
      )}
    </div>
  );
}
