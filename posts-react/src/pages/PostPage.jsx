import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const API = "https://jsonplaceholder.typicode.com";

function PostPage() {
  const { id } = useParams(); // /posts/3이면 "3"
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(`${API}/posts/${id}`);
        if (!response.ok) throw new Error(`${id}번 글을 찾을 수 없습니다.`);
        const data = await response.json();
        const commentResponse = await fetch(`${API}/comments?postId=${id}`);
        const commentData = await commentResponse.json();
        setPost(data);
        setComments(commentData);
        setMessage("");
      } catch (error) {
        setMessage(error.message);
      }
    }
    loadPost();
  }, [id]); // 주소의 id가 바뀌면 다시 받음

  if (message) {
    return (
      <p className="text-destructive">
        {message}{" "}
        <Button asChild variant="link">
          <Link to="/posts">글 목록으로</Link>
        </Button>
      </p>
    );
  }
  if (!post) return <p className="text-muted-foreground">불러오는 중…</p>;

  return (
    <article className="space-y-6">
      <Card>
        <CardHeader>
          <CardDescription>
            {post.id}번 글 · 작성자 {post.userId}번
          </CardDescription>
          <CardTitle className="text-lg">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="leading-relaxed">{post.body}</CardContent>
        <CardFooter>
          <Button asChild variant="outline" size="sm">
            <Link to={`/posts?userId=${post.userId}`}>
              작성자 {post.userId}번의 글 더 보기
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <div className="flex items-center gap-2">
        <h2 className="font-semibold">댓글</h2>
        <Badge variant="secondary">{comments.length}개</Badge>
      </div>
      <ul className="space-y-2">
        {comments.map((comment) => (
          <li key={comment.id}>
            <Card size="sm">
              <CardHeader>
                <CardDescription>{comment.email}</CardDescription>
              </CardHeader>
              <CardContent>{comment.body}</CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PostPage;
