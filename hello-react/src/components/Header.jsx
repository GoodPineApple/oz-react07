import { NavLink } from "react-router";

// 맨 위 — 스터디 이름, 메뉴, 오늘의 발표자(App에서 props로 받음)
function Header({ presenter }) {
  const siteName = "오즈 스터디";

  return (
    <header className="site-header">
      <h1>{siteName}</h1>
      <nav className="site-nav">
        <NavLink to="/" end>
          홈
        </NavLink>
        <NavLink to="/members">멤버</NavLink>
      </nav>
      <p className="presenter">오늘의 발표자 : {presenter || "아직 정하지 않음"}</p>
    </header>
  );
}

export default Header;
