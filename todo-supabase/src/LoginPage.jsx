import { Navigate } from "react-router";
import LoginForm from "./LoginForm.jsx";

// 로그인 페이지(/login) — 이미 로그인했으면 홈으로 보냅니다
function LoginPage({ user, checking }) {
  if (checking) {
    return <p className="text-slate-500">로그인 상태를 확인하는 중…</p>;
  }
  if (user) {
    // 로그인에 성공하면 App의 user가 바뀌고, 이 페이지가 다시 그려지며 홈으로 갑니다
    return <Navigate to="/" replace />;
  }
  return <LoginForm />;
}

export default LoginPage;
