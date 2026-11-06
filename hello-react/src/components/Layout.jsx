import { Outlet } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// 모든 페이지의 틀 — 머리말과 꼬리말은 그대로, 가운데(Outlet)만 주소에 따라 바뀝니다
function Layout({ presenter }) {
  return (
    <>
      <Header presenter={presenter} />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
