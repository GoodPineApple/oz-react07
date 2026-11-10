import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import { AuthContext } from "./AuthContext.js";

// 로그인 상태를 기억하고, 감싼 컴포넌트(children) 모두에 나눠 줍니다 — DAY 35까지 App이 하던 일
function AuthProvider({ children }) {
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

  return <AuthContext value={{ user, checking }}>{children}</AuthContext>;
}

export default AuthProvider;
