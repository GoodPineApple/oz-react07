import { useContext } from "react";
import { Outlet } from "react-router";
import { ThemeContext } from "./ThemeContext.js";
import Header from "./Header.jsx";

// 페이지 전체의 클래스 — dark: 클래스는 data-theme이 "dark"일 때만 켜집니다(index.css)
const pageClass =
  "min-h-screen bg-slate-100 lg:grid lg:grid-cols-2 " +
  "dark:bg-slate-900 dark:text-slate-100";

// 모든 페이지의 틀 — 모바일은 위아래로 쌓고, 넓은 화면(lg)은 왼쪽 소개 · 오른쪽 페이지 두 칸
function Layout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme} className={pageClass}>
      {/* 서비스 소개 — 모바일은 위쪽 띠, lg부터는 왼쪽 절반 */}
      <section className="bg-blue-600 px-6 py-8 text-white lg:flex lg:flex-col lg:justify-center lg:px-16">
        <h1 className="text-2xl font-bold lg:text-4xl">할 일 노트</h1>
        <p className="mt-2 text-blue-100">오늘 할 일을 적고, 끝낸 일은 지워 가세요.</p>
        {/* 넓은 화면에서만 보이는 목록 */}
        <ul className="mt-8 hidden space-y-2 lg:block">
          <li>✓ 할 일 적어 두기</li>
          <li>✓ 끝낸 일 표시하기</li>
          <li>✓ 다 한 일 지우기</li>
        </ul>
      </section>

      {/* 머리말과 지금 주소의 페이지 — md부터는 가운데에 */}
      <main className="px-6 py-10 md:flex md:flex-col md:items-center md:justify-center">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
