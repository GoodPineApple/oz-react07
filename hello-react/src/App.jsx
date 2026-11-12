import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // 오늘의 발표자 — Header와 카드가 함께 쓰므로 둘의 가장 가까운 공통 부모인 App이 기억합니다
  const [presenter, setPresenter] = useState("");

  // 처음 그려질 때 한 번, 그 뒤 발표자가 바뀔 때마다 브라우저 탭의 제목을 바꿉니다(사이드 이펙트)
  useEffect(() => {
    document.title = presenter
      ? `발표 : ${presenter} · 멤버 소개`
      : "멤버 소개";
  }, [presenter]);

  function handleSelect(name) {
    setPresenter(name);
  }

  return (
    <>
      <Header presenter={presenter} />
      <Main presenter={presenter} onHandle={handleSelect} />
      <Footer />
    </>
  );
}

export default App;
