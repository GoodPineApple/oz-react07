import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import MembersPage from "./pages/MembersPage.jsx";
import MemberPage from "./pages/MemberPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  // 오늘의 발표자 — 페이지를 옮겨 다녀도 남도록, 라우트 바깥의 App이 기억합니다
  const [presenter, setPresenter] = useState("");

  // 처음 그려질 때 한 번, 그 뒤 발표자가 바뀔 때마다 브라우저 탭의 제목을 바꿉니다(사이드 이펙트)
  useEffect(() => {
    document.title = presenter ? `발표 : ${presenter} · 멤버 소개` : "멤버 소개";
  }, [presenter]);

  function handleSelect(name) {
    setPresenter(name);
  }

  return (
    <Routes>
      {/* 모든 페이지가 Layout(머리말 · 꼬리말) 안에 그려집니다 */}
      <Route element={<Layout presenter={presenter} />}>
        <Route index element={<HomePage />} />
        <Route
          path="members"
          element={<MembersPage presenter={presenter} onSelect={handleSelect} />}
        />
        <Route path="members/:id" element={<MemberPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
