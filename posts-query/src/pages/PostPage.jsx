import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";

const API = "https://jsonplaceholder.typicode.com";

// 글 하나와 그 댓글을 받아 오는 함수 — DAY 31의 loadPost와 같은 차례
async function fetchPost(id) {
  const response = await fetch(`${API}/posts/${id}`);
  if (!response.ok) throw new Error(`${id}번 글을 찾을 수 없습니다.`);
  const post = await response.json();
  const commentResponse = await fetch(`${API}/comments?postId=${id}`);
  const comments = await commentResponse.json();
  return { post, comments };
}

function PostPage() {
  const { id } = useParams(); // /posts/3이면 "3"
  const { data, isPending, error } = useQuery({
    queryKey: ["post", id], // 글 번호마다 따로 기억
    queryFn: () => fetchPost(id),
  });

  if (isPending) return <p>불러오는 중…</p>;
  if (error) {
    return (
      <p className="notice">
        {error.message} <Link to="/posts">글 목록으로</Link>
      </p>
    );
  }

  const { post, comments } = data;
  return (
    <article>
      <p className="meta">
        {post.id}번 글 · 작성자 {post.userId}번
      </p>
      <h1>{post.title}</h1>
      <p className="body">{post.body}</p>
      <Link to={`/posts?userId=${post.userId}`}>
        작성자 {post.userId}번의 글 더 보기
      </Link>
      <h2>댓글 {comments.length}개</h2>
      <ul className="comments">
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.email}</strong>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PostPage;
