// 맨 위 — 스터디 이름과 한 줄 소개
function Header() {
  const siteName = "오즈 스터디 React";

  return (
    <header className="site-header">
      <h1>{siteName}</h1>
      <p>React를 함께 공부하는 사람들입니다.</p>
    </header>
  );
}

export default Header;
