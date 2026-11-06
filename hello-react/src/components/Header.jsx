import { NavLink } from "react-router";

// 맨 위 — 팀 이름, 메뉴, 오늘의 발표자(App에서 props로 받음)
function Header({ presenter }) {
  const teamName = "오즈 7기 3팀";

  return (
    <header className="site-header">
      <h1>{teamName}</h1>
      <nav className="site-nav">
        <NavLink to="/" end>
          홈
        </NavLink>
        <NavLink to="/members">팀원</NavLink>
      </nav>
      <p className="presenter">오늘의 발표자 : {presenter || "아직 정하지 않음"}</p>
    </header>
  );
}

export default Header;
