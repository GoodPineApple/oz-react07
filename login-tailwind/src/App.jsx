import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import Layout from "./Layout.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import LoginPage from "./LoginPage.jsx";
import Home from "./Home.jsx";

// 할 일 노트 — 로그인 상태(user · checking)를 기억하고, 주소에 맞는 페이지를 고릅니다
function App() {
  const [user, setUser] = useState(null); // 로그인한 사람 — 없으면 null
  const [checking, setChecking] = useState(true); // 처음에 로그인 상태를 확인하는 중

  useEffect(() => {
    // 로그인 상태가 정해지거나 바뀔 때마다 불림 — 처음 한 번, 로그인 · 로그아웃할 때
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setChecking(false);
    });
    return unsubscribe; // 화면에서 사라지면 듣기를 멈춤
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
