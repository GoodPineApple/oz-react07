import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.js";

// 밝게 · 어둡게 단추 — 지금 테마와 바꾸는 함수를 ThemeContext에서 꺼냅니다
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-bold dark:border-slate-600"
    >
      {theme === "light" ? "어둡게" : "밝게"}
    </button>
  );
}

export default ThemeButton;
