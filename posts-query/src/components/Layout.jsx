import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <div className="app">
      <header className="header">
        <span className="logo">JSONPlaceholder 게시판</span>
        <nav className="tabs">
          <NavLink to="/">홈</NavLink>
          <NavLink to="/posts">글 목록</NavLink>
          <NavLink to="/users">작성자</NavLink>
        </nav>
      </header>
      <main className="main">
        {/* 주소에 맞는 페이지가 이 자리에 그려집니다 */}
        <Outlet />
      </main>
      <footer className="footer">
        데이터 : JSONPlaceholder (jsonplaceholder.typicode.com)
      </footer>
    </div>
  );
}

export default Layout;
