import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Button, Card, Chip } from "@heroui/react";

const API = "https://jsonplaceholder.typicode.com";
const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// HeroUI — Tailwind CSS 위에 만든 컴포넌트(Card.Header처럼 나눠 씀)
function App() {
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
        setPosts(await response.json());
        setMessage("");
      } catch (error) {
        setMessage(error.message);
      }
    }
    loadPosts();
  }, [userId]); // DAY 31과 같은 코드 — 모양만 라이브러리로

  return (
    <div className="min-h-svh">
      <header className="border-b px-4 py-3 font-semibold">JSONPlaceholder 게시판</header>
      <main className="mx-auto max-w-5xl space-y-4 px-4 py-6">
        {message && <p className="text-danger">{message}</p>}
        {!posts && !message && <p>불러오는 중…</p>}
        {posts && (
          <>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold">글 목록</h1>
              <Chip>{posts.length}개</Chip>
            </div>
            <div className="flex flex-wrap gap-1">
              <Button size="sm" variant={userId ? "outline" : "primary"} onPress={() => setSearchParams({})}>
                전체
              </Button>
              {userIds.map((n) => (
                <Button
                  key={n}
                  size="sm"
                  variant={Number(userId) === n ? "primary" : "outline"}
                  onPress={() => setSearchParams({ userId: n })}
                >
                  {n}
                </Button>
              ))}
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.id}>
                  <Card className="h-full">
                    <Card.Header>
                      <Card.Description>
                        {post.id}번 글 · 작성자 {post.userId}번
                      </Card.Description>
                      <Card.Title className="line-clamp-2">{post.title}</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <p className="line-clamp-2 text-sm text-muted">{post.body}</p>
                    </Card.Content>
                  </Card>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
