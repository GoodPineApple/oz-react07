import { useState } from "react";
import "./ProfileCard.css";

// 멤버 한 사람의 카드 — 응원 수는 카드가, 오늘의 발표자는 App이 기억합니다
function ProfileCard({
  name,
  role = "멤버",
  intro,
  projects = 0,
  presenter,
  onSelect,
}) {
  const [cheers, setCheers] = useState(0);
  const isPresenter = presenter === name; // props로 계산할 수 있는 값은 상태로 두지 않습니다

  function handleCheer() {
    setCheers(cheers + 1);
  }

  function handleReset() {
    setCheers(0);
  }

  return (
    <article
      className={isPresenter ? "profile-card is-presenter" : "profile-card"}
    >
      <div className="avatar">{name[0]}</div>
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p>{intro}</p>
      <p className="count">
        프로젝트 {projects}개 · 응원 {cheers}번
      </p>
      <div className="buttons">
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
