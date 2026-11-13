import { Link } from "react-router";

function NotFoundPage() {
  return (
    <section>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>주소를 다시 확인해 주세요.</p>
      <Link to="/">홈으로</Link>
    </section>
  );
}

export default NotFoundPage;
