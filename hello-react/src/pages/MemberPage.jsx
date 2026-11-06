import { Link, useParams } from "react-router";
import { members } from "../data/members.js";

// 팀원 한 사람(/members/:id) — 주소의 :id로 누구인지 찾습니다
function MemberPage() {
  const { id } = useParams(); // 주소에서 꺼낸 값은 문자열 — "2"
  const member = members.find((item) => item.id === Number(id));

  if (!member) {
    return (
      <section>
        <h2>{id}번 팀원은 없습니다</h2>
        <Link to="/members">팀원 목록으로</Link>
      </section>
    );
  }

  const projects = member.projects || 0;
  return (
    <article className="member-detail">
      <div className="avatar">{member.name[0]}</div>
      <h2>{member.name}</h2>
      <p className="role">{member.role || "팀원"}</p>
      <p>{member.intro}</p>
      <p>{projects > 0 ? `프로젝트 ${projects}개` : "첫 프로젝트 준비 중"}</p>
      <Link to="/members">팀원 목록으로</Link>
    </article>
  );
}

export default MemberPage;
