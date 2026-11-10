import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { ThemeContext } from "./ThemeContext.js";
import Layout from "./Layout.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import LoginPage from "./LoginPage.jsx";
import Home from "./Home.jsx";

// 할 일 노트 — 테마를 기억하고, 주소에 맞는 페이지를 고릅니다(로그인 정보는 AuthProvider가)
function App() {
  const [theme, setTheme] = useState("light"); // 밝게(light) · 어둡게(dark)

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    // 이 안의 컴포넌트는 몇 층 아래든 theme · toggleTheme을 꺼내 쓸 수 있습니다
    <ThemeContext value={{ theme, toggleTheme }}>
      <Routes>
        {/* 이제 user를 props로 넘기지 않습니다 — 필요한 곳이 AuthContext에서 꺼냄 */}
        <Route element={<Layout />}>
          <Route element={<PrivateRoute />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </ThemeContext>
  );
}

export default App;
