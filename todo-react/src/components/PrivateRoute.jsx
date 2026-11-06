import { Navigate, Outlet } from "react-router";

// 로그인해야 들어갈 수 있는 라우트를 감쌉니다 — 로그인하지 않았으면 /login으로 보냅니다
function PrivateRoute({ user }) {
  if (!user) {
    // replace : 기록에서 지금 주소를 /login으로 바꿔, 뒤로 가기가 이 페이지로 돌아오지 않게 합니다
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;
