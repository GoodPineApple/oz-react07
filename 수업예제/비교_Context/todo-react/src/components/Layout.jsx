import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { TodosContext } from "../contexts/TodosContext.js";

// 모든 페이지의 틀 — 머리말 오른쪽은 로그인했는지에 따라 다르게 그립니다
function Layout({ user, onLogout }) {
  const { todos } = useContext(TodosContext);
  const leftCount = todos.filter((todo) => !todo.done).length;
  return (
    <div className="app">
      <header className="app-header">
        <nav>
          <NavLink to="/" end>
            홈
          </NavLink>
          <NavLink to="/todos">내 할 일 ({leftCount})</NavLink>
        </nav>
        {user ? (
          <div className="user">
            <span>{user}님</span>
            {/* user가 null이 되면, 보호된 페이지에 있던 사람은 PrivateRoute가 /login으로 보냅니다 */}
            <button onClick={onLogout}>로그아웃</button>
          </div>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
