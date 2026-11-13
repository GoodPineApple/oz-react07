// 주소 /posts — 서버 컴포넌트에서 JSONPlaceholder의 글을 받아 그림
const API = "https://jsonplaceholder.typicode.com";

export default async function PostsPage() {
  const res = await fetch(`${API}/posts?_limit=5`);
  if (!res.ok) {
    throw new Error("글을 받지 못했습니다");
  }
  const posts = await res.json();

  return (
    <>
      <h1>글 목록</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
