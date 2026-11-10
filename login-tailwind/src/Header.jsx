import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";

// 머리말 — 로그인했으면 이메일과 로그아웃 단추, 아니면 아무것도 그리지 않습니다
function Header({ user }) {
  if (!user) {
    return null;
  }
  return (
    <header className="mb-4 flex w-full items-center justify-between md:max-w-sm">
      <p className="text-sm text-slate-600">{user.email}</p>
      <button
        type="button"
        onClick={() => signOut(auth)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-bold text-slate-700 hover:bg-slate-50"
      >
        로그아웃
      </button>
    </header>
  );
}

export default Header;
