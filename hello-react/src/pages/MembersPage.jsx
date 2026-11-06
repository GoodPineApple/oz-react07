import { useSearchParams } from "react-router";
import ProfileCard from "../components/ProfileCard.jsx";
import { members, roles } from "../data/members.js";
import styles from "./MembersPage.module.css";

// 멤버 목록(/members) — 고른 역할은 주소의 ?role= 에 둡니다
function MembersPage({ presenter, onSelect }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const role = searchParams.get("role") || "전체";
  // 보여 줄 멤버는 주소의 role로 계산합니다
  const visibleMembers =
    role === "전체" ? members : members.filter((member) => member.role === role);

  function handleRole(item) {
    // 「전체」면 ?role= 을 지우고, 아니면 ?role=기획 처럼 주소를 바꿉니다
    setSearchParams(item === "전체" ? {} : { role: item });
  }

  return (
    <>
      <h2>멤버</h2>
      <div className={styles.roleButtons}>
        {roles.map((item) => (
          <button
            key={item}
            className={item === role ? styles.selected : ""}
            onClick={() => handleRole(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={styles.cardList}>
        {visibleMembers.map((member) => (
          <ProfileCard
            key={member.id}
            id={member.id}
            name={member.name}
            role={member.role}
            intro={member.intro}
            projects={member.projects}
            presenter={presenter}
            onSelect={onSelect}
          />
        ))}
      </div>
    </>
  );
}

export default MembersPage;
