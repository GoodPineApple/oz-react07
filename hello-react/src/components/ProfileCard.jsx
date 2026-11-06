import { useState } from "react";
import { Link } from "react-router";
import styles from "./ProfileCard.module.css";

// 멤버 한 사람의 카드 — 응원 수는 카드가, 오늘의 발표자는 App이 기억합니다
// 이름을 누르면 그 사람의 페이지(/members/아이디)로 갑니다
function ProfileCard({ id, name, role = "멤버", intro, projects = 0, presenter, onSelect }) {
  const [cheers, setCheers] = useState(0);
  const isPresenter = presenter === name;   // props로 계산할 수 있는 값은 상태로 두지 않습니다
  // 프로젝트가 없으면 다른 글 — 조건에 따라 보여 줄 것을 고릅니다
  const projectText = projects > 0 ? `프로젝트 ${projects}개` : "첫 프로젝트 준비 중";

  function handleCheer() {
    setCheers(cheers + 1);
  }

  function handleReset() {
    setCheers(0);
  }

  // 발표자면 클래스를 하나 더 — 두 이름을 띄어 이어 붙입니다
  const cardClass = isPresenter ? `${styles.card} ${styles.presenter}` : styles.card;

  return (
    <article className={cardClass}>
      <div className={styles.avatar}>{name[0]}</div>
      <h3 className={styles.name}>
        <Link to={`/members/${id}`}>{name}</Link>
      </h3>
      <p className={styles.role}>{role}</p>
      <p>{intro}</p>
      <p className={styles.count}>{projectText} · 응원 {cheers}번</p>
      <div className={styles.buttons}>
        <button onClick={handleCheer}>응원하기</button>
        <button onClick={handleReset}>처음으로</button>
        <button onClick={() => onSelect(name)}>
          {isPresenter ? "오늘의 발표자" : "발표자로 정하기"}
        </button>
      </div>
    </article>
  );
}

export default ProfileCard;
