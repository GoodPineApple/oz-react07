import { createContext } from "react";

// 밝게 · 어둡게 — 제공자 아래 어디서든 useContext(ThemeContext)로 꺼내 씁니다
// 기본값은 위에 제공자가 없을 때만 쓰입니다(눌러도 아무 일도 하지 않는 함수)
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});
