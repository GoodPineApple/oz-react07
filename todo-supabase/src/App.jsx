import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { supabase } from "./supabase.js";
import Layout from "./Layout.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import LoginPage from "./LoginPage.jsx";
import Home from "./Home.jsx";

// 할 일 노트 — 로그인 상태(user · checking)를 기억하고, 주소에 맞는 페이지를 고릅니다
function App() {
  const [user, setUser] = useState(null); // 로그인한 사람 — 없으면 null
  const [checking, setChecking] = useState(true); // 처음에 로그인 상태를 확인하는 중

  useEffect(() => {
    // 처음 한 번(INITIAL_SESSION), 그 뒤 로그인 · 로그아웃할 때마다 불림
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session ? session.user : null); // 로그인했으면 session.user
      setChecking(false);
    });
    return () => data.subscription.unsubscribe(); // 사라지면 듣기를 멈춤
  }, []);

  return (
    <Routes>
      {/* 모든 페이지는 Layout 안에 — user는 App → Layout → Header로 내려갑니다 */}
      <Route element={<Layout user={user} />}>
        <Route element={<PrivateRoute user={user} checking={checking} />}>
          <Route index element={<Home user={user} />} />
        </Route>
        <Route path="login" element={<LoginPage user={user} checking={checking} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
