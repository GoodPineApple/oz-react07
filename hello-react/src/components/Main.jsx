import { useState } from "react";
import ProfileCard from "./ProfileCard.jsx";

// 멤버 네 명의 데이터 — 카드마다 다른 것은 이 값뿐입니다(id는 key로 씀)
const members = [
  { id: 1, name: "김하늘", role: "기획", intro: "사용자가 처음 보는 화면부터 정합니다.", projects: 3 },
  { id: 2, name: "이바다", role: "디자인", intro: "색과 글꼴로 첫인상을 만듭니다.", projects: 2 },
  { id: 3, name: "박나무", role: "개발", intro: "버튼이 눌리는 순간을 코드로 만듭니다.", projects: 4 },
  { id: 4, name: "최새봄", intro: "이번 주에 스터디에 들어왔습니다." },
];
const roles = ["전체", "기획", "디자인", "개발"];

// 가운데 — 멤버 소개 글과 멤버 카드. 고른 역할의 카드만 그립니다
function Main({ presenter, onSelect }) {
  const [role, setRole] = useState("전체");
  // 보여 줄 멤버는 role로 계산할 수 있으므로 state로 두지 않습니다
  const visibleMembers =
    role === "전체" ? members : members.filter((member) => member.role === role);

  return (
    <main className="site-main">
      <h2>멤버 소개</h2>
      <p>우리 스터디는 {members.length}명입니다. 기획 · 디자인 · 개발을 공부합니다.</p>

      <div className="role-buttons">
        {roles.map((item) => (
          <button
            key={item}
            className={item === role ? "is-active" : ""}
            onClick={() => setRole(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="card-list">
        {visibleMembers.map((member) => (
          <ProfileCard
            key={member.id}
            name={member.name}
            role={member.role}
            intro={member.intro}
            projects={member.projects}
            presenter={presenter}
            onSelect={onSelect}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
