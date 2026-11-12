import "./ProfileCard.css";

// 멤버 한 사람의 카드 — 보여 줄 내용은 props로 받습니다
function ProfileCard({ name, role = "멤버", intro, projects = 0, age = 20 }) {
  return (
    <article className="profile-card">
      <div className="avatar">{name[0]}</div>
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p>{intro}</p>
      <p className="count">프로젝트 {projects}개</p>
      <p className="age">{age}살</p>
    </article>
  );
}

export default ProfileCard;
