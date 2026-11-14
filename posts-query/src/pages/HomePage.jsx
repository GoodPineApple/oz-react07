import { useState } from "react";
import { Link, useNavigate } from "react-router";

function HomePage() {
  const [postId, setPostId] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); // 페이지를 새로 열지 않음
    navigate(`/posts/${postId}`); // 입력한 번호의 글 페이지로
  }

  return (
    <section>
      <h1>JSONPlaceholder 게시판</h1>
      <p>연습용 서버 JSONPlaceholder의 글 100개와 작성자 10명을 주소마다 나눠 보여 줍니다.</p>
      <ul className="examples">
        <li>
          <Link to="/posts/3">/posts/3</Link> — 3번 글 하나
        </li>
        <li>
          <Link to="/posts?userId=3">/posts?userId=3</Link> — 3번 작성자의 글
        </li>
      </ul>
      <form className="jump" onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          max="100"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          placeholder="글 번호"
          required
        />
        <button>글 보기</button>
      </form>
    </section>
  );
}

export default HomePage;
