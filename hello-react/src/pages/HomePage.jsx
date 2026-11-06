import { Link } from "react-router";
import { members } from "../data/members.js";

// 첫 페이지(/) — 팀 소개와 팀원 페이지로 가는 링크
function HomePage() {
  return (
    <section>
      <h2>팀 소개</h2>
      <p>랜딩페이지 프로젝트를 함께 만든 사람들입니다.</p>
      <p>우리 팀은 {members.length}명입니다. 기획 · 디자인 · 개발을 나눠 맡았습니다.</p>
      <Link className="button-link" to="/members">
        팀원 보러 가기
      </Link>
    </section>
  );
}

export default HomePage;
