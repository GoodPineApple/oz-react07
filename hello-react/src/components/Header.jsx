// 맨 위 — 팀 이름과 오늘의 발표자(App에서 props로 받음)
function Header({ presenter }) {
  const teamName = "오즈 7기 3팀";

  return (
    <header className="site-header">
      <h1>{teamName}</h1>
      <p>랜딩페이지 프로젝트를 함께 만든 사람들입니다.</p>
      <p className="presenter">오늘의 발표자 : {presenter || "아직 정하지 않음"}</p>
    </header>
  );
}

export default Header;
