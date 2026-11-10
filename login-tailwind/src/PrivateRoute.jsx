import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "./AuthContext.js";

// 로그인해야 들어가는 라우트를 감쌉니다(DAY 31) — 오늘은 Firebase가 확인을 마칠 때까지 기다립니다
function PrivateRoute() {
  const { user, checking } = useContext(AuthContext);
  if (checking) {
    // 새로고침 직후에는 user가 잠깐 null — 확인이 끝나기 전에는 /login으로 보내지 않습니다
    return <p className="text-slate-500">로그인 상태를 확인하는 중…</p>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;
