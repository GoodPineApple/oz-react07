import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

const API = "https://jsonplaceholder.typicode.com";
const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function PostsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("userId"); // ?userId=3이면 "3", 없으면 null
  const [posts, setPosts] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadPosts() {
      const url = userId ? `${API}/posts?userId=${userId}` : `${API}/posts`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`글 목록을 받지 못했습니다 (${response.status})`);
        const data = await response.json();
        setPosts(data);
        setMessage("");
      } catch (error) {
        setMessage(error.message);
      }
    }
    loadPosts();
  }, [userId]); // 주소의 userId가 바뀌면 다시 받음

  if (message) return <p className="notice">{message}</p>;
  if (!posts) return <p>불러오는 중…</p>;

  return (
    <section>
      <h1>글 목록 ({posts.length}개)</h1>
      <div className="filters">
        <button
          className={userId ? "" : "is-active"}
          onClick={() => setSearchParams({})}
        >
          전체
        </button>
        {userIds.map((n) => (
          <button
            key={n}
            className={Number(userId) === n ? "is-active" : ""}
            onClick={() => setSearchParams({ userId: n })}
          >
            {n}
          </button>
        ))}
      </div>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <span className="num">{post.id}</span> {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PostsPage;
