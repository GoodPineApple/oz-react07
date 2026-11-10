import useFetch from "../hooks/useFetch.js";

// 고른 글 — 본문은 받은 글에서, 댓글은 글 번호로 따로 받아 옴
export default function PostDetail({ post }) {
  const url = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`;
  const { data: comments, error, loading } = useFetch(url);

  return (
    <section className="panel">
      <h2>
        {post.id}. {post.title}
      </h2>
      <p className="body">{post.body}</p>

      <h3>댓글</h3>
      {loading && <p className="status">댓글을 불러오는 중…</p>}
      {error && (
        <p className="status error">불러오지 못했습니다 — {error.message}</p>
      )}
      {comments && (
        <ul className="comments">
          {comments.map((comment) => (
            <li key={comment.id}>
              <b>{comment.email}</b>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
