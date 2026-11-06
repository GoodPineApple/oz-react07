import { useState } from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import TodosPage from "./pages/TodosPage.jsx";

function App() {
  // 로그인한 사람의 이름 — null이면 로그인하지 않은 상태(DAY 33에서는 Firebase 인증이 알려 줌)
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route element={<Layout user={user} onLogout={() => setUser(null)} />}>
        <Route index element={<HomePage user={user} />} />
        <Route path="login" element={<LoginPage onLogin={setUser} />} />
        {/* 로그인해야 볼 수 있는 페이지는 PrivateRoute 안에 둡니다 */}
        <Route element={<PrivateRoute user={user} />}>
          <Route path="todos" element={<TodosPage user={user} />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
