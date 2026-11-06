import { Link } from "react-router";
import { members } from "../data/members.js";

// 첫 페이지(/) — 멤버 소개와 멤버 페이지로 가는 링크
function HomePage() {
  return (
    <section>
      <h2>멤버 소개</h2>
      <p>React를 함께 공부하는 사람들입니다.</p>
      <p>우리 스터디는 {members.length}명입니다. 기획 · 디자인 · 개발을 공부합니다.</p>
      <Link className="button-link" to="/members">
        멤버 보러 가기
      </Link>
    </section>
  );
}

export default HomePage;
