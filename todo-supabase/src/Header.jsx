import { supabase } from "./supabase.js";

// 이 브라우저에서만 로그아웃
// (scope를 빼면 그 사람이 로그인한 모든 기기에서 로그아웃)
function logout() {
  supabase.auth.signOut({ scope: "local" });
}

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
        onClick={logout}
        className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-bold text-slate-700 hover:bg-slate-50"
      >
        로그아웃
      </button>
    </header>
  );
}

export default Header;
