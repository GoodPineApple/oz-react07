import { Link, useParams } from "react-router";
import { members } from "../data/members.js";

// 멤버 한 사람(/members/:id) — 주소의 :id로 누구인지 찾습니다
function MemberPage() {
  const { id } = useParams(); // 주소에서 꺼낸 값은 문자열 — "2"
  const member = members.find((item) => item.id === Number(id));

  if (!member) {
    return (
      <section>
        <h2>{id}번 멤버는 없습니다</h2>
        <Link to="/members">멤버 목록으로</Link>
      </section>
    );
  }

  const projects = member.projects || 0;
  return (
    <article className="member-detail">
      <div className="avatar">{member.name[0]}</div>
      <h2>{member.name}</h2>
      <p className="role">{member.role || "멤버"}</p>
      <p>{member.intro}</p>
      <p>{projects > 0 ? `프로젝트 ${projects}개` : "첫 프로젝트 준비 중"}</p>
      <Link to="/members">멤버 목록으로</Link>
    </article>
  );
}

export default MemberPage;
