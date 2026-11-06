// 맨 위 — 팀 이름과 한 줄 소개
function Header() {
  const teamName = "오즈 7기 3팀";

  return (
    <header className="site-header">
      <h1>{teamName}</h1>
      <p>랜딩페이지 프로젝트를 함께 만든 사람들입니다.</p>
    </header>
  );
}

export default Header;
