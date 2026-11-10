import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import LoginForm from "./LoginForm.jsx";
import Home from "./Home.jsx";

// 할 일 노트 — 모바일은 위아래로 쌓고, 넓은 화면(lg)은 왼쪽 소개 · 오른쪽 폼 두 칸
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
    <div className="min-h-screen bg-slate-100 lg:grid lg:grid-cols-2">
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

      {/* 로그인 폼 또는 홈 — md부터는 가운데의 흰 카드 */}
      <main className="px-6 py-10 md:flex md:items-center md:justify-center">
        {checking && <p className="text-slate-500">로그인 상태를 확인하는 중…</p>}
        {!checking && user && <Home user={user} />}
        {!checking && !user && <LoginForm />}
      </main>
    </div>
  );
}

export default App;
