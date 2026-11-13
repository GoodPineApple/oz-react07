import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

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
      <p className="notice">
        {message} <Link to="/posts">글 목록으로</Link>
      </p>
    );
  }
  if (!post) return <p>불러오는 중…</p>;

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
