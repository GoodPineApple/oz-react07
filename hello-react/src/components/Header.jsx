// 맨 위 — 스터디 이름과 오늘의 발표자(App에서 props로 받음)
function Header({ presenter }) {
  const siteName = "오즈 스터디";

  return (
    <header className="site-header">
      <h1>{siteName}</h1>
      <p>React를 함께 공부하는 사람들입니다.</p>
      <p className="presenter">오늘의 발표자 : {presenter || "아직 정하지 않음"}</p>
    </header>
  );
}

export default Header;
