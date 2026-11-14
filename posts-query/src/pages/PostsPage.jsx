import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router";

const API = "https://jsonplaceholder.typicode.com";
const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 글 목록을 받아 오는 함수 — 실패하면 오류를 던져 useQuery의 error로 보냄
async function fetchPosts(userId) {
  const url = userId ? `${API}/posts?userId=${userId}` : `${API}/posts`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`글 목록을 받지 못했습니다 (${response.status})`);
  return response.json();
}

function PostsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("userId"); // ?userId=3이면 "3", 없으면 null
  const { data: posts, isPending, error } = useQuery({
    queryKey: ["posts", userId], // 기억해 둘 이름 — userId마다 따로
    queryFn: () => fetchPosts(userId),
  });

  if (isPending) return <p>불러오는 중…</p>;
  if (error) return <p className="notice">{error.message}</p>;

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
