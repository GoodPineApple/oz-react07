import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";
import { AuthContext } from "./AuthContext.js";
import ThemeButton from "./ThemeButton.jsx";

// 로그아웃 단추의 클래스 — 긴 클래스는 변수에 담아 나눠 적습니다
const buttonClass =
  "rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-bold text-slate-700 " +
  "hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200";

// 머리말 — 밝게 · 어둡게 단추는 늘, 이메일과 로그아웃 단추는 로그인했을 때만 보입니다
function Header() {
  const { user } = useContext(AuthContext);
  return (
    <header className="mb-4 flex w-full items-center justify-between gap-3 md:max-w-sm">
      <ThemeButton />
      {user && (
        <div className="flex items-center gap-3">
          <p className="text-sm text-slate-600 dark:text-slate-300">{user.email}</p>
          <button
            type="button"
            onClick={() => signOut(auth)}
            className={buttonClass}
          >
            로그아웃
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
