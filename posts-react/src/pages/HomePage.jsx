import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function HomePage() {
  const [postId, setPostId] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); // 페이지를 새로 열지 않음
    navigate(`/posts/${postId}`); // 입력한 번호의 글 페이지로
  }

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle className="text-lg">JSONPlaceholder 게시판</CardTitle>
        <CardDescription>
          연습용 서버 JSONPlaceholder의 글 100개와 작성자 10명을 주소마다 나눠 보여 줍니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-1 text-sm">
          <li>
            <Link to="/posts/3" className="font-medium underline underline-offset-4">/posts/3</Link> — 3번 글 하나
          </li>
          <li>
            <Link to="/posts?userId=3" className="font-medium underline underline-offset-4">/posts?userId=3</Link> — 3번 작성자의 글
          </li>
        </ul>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <Input
            type="number"
            min="1"
            max="100"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
            placeholder="글 번호"
            required
            className="w-32"
          />
          <Button type="submit">글 보기</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default HomePage;
