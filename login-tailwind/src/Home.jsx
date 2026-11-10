import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";

// 로그인한 사람에게 보이는 화면 — 할 일 목록은 DAY 34에서 Firestore로 붙입니다
function Home({ user }) {
  return (
    <div className="w-full md:max-w-sm md:rounded-2xl md:bg-white md:p-8 md:shadow-lg">
      <h2 className="text-xl font-bold">반가워요!</h2>
      <p className="mt-4 text-sm font-bold text-slate-700">로그인한 이메일</p>
      <p className="mt-1">{user.email}</p>
      <button
        type="button"
        onClick={() => signOut(auth)}
        className="mt-6 w-full rounded-lg border border-slate-300 py-2.5 font-bold text-slate-700 hover:bg-slate-50"
      >
        로그아웃
      </button>
    </div>
  );
}

export default Home;
