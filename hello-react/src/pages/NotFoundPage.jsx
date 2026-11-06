import { Link } from "react-router";

// 맞는 라우트가 없을 때(path="*") 보여 주는 페이지
function NotFoundPage() {
  return (
    <section>
      <h2>페이지를 찾을 수 없습니다</h2>
      <p>주소를 다시 확인해 주세요.</p>
      <Link to="/">홈으로</Link>
    </section>
  );
}

export default NotFoundPage;
