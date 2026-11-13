import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  if (message) return <p className="text-destructive">{message}</p>;
  if (!posts) return <p className="text-muted-foreground">불러오는 중…</p>;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">글 목록</h1>
        <Badge variant="secondary">{posts.length}개</Badge>
      </div>
      <div className="flex flex-wrap gap-1">
        <Button
          size="sm"
          variant={userId ? "outline" : "default"}
          onClick={() => setSearchParams({})}
        >
          전체
        </Button>
        {userIds.map((n) => (
          <Button
            key={n}
            size="sm"
            variant={Number(userId) === n ? "default" : "outline"}
            onClick={() => setSearchParams({ userId: n })}
          >
            {n}
          </Button>
        ))}
      </div>
      {/* 모바일은 한 칸, sm(640px) 이상 두 칸, lg(1024px) 이상 세 칸 */}
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`} className="block h-full">
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardDescription>
                    {post.id}번 글 · 작성자 {post.userId}번
                  </CardDescription>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="line-clamp-2 text-muted-foreground">
                  {post.body}
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PostsPage;
