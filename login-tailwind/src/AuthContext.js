import { createContext } from "react";

// 로그인 정보(user · checking) — AuthProvider 아래 어디서든 useContext(AuthContext)로 꺼내 씁니다
// 기본값은 위에 제공자가 없을 때만 쓰입니다
export const AuthContext = createContext({ user: null, checking: true });
