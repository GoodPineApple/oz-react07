import { NavLink, Outlet } from "react-router";
import { buttonVariants } from "@/components/ui/button";

// 메뉴는 shadcn/ui 단추 모양 — 지금 주소면 default(진한 단추), 아니면 ghost(배경 없음)
function menuClass({ isActive }) {
  return buttonVariants({ variant: isActive ? "default" : "ghost", size: "sm" });
}

function Layout() {
  return (
    <div className="min-h-svh bg-muted/40">
      <header className="border-b bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-3">
          <span className="font-semibold">JSONPlaceholder 게시판</span>
          <nav className="flex gap-1">
            <NavLink to="/" className={menuClass}>홈</NavLink>
            <NavLink to="/posts" className={menuClass}>글 목록</NavLink>
            <NavLink to="/users" className={menuClass}>작성자</NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-6">
        {/* 주소에 맞는 페이지가 이 자리에 그려집니다 */}
        <Outlet />
      </main>
      <footer className="mx-auto max-w-5xl px-4 pb-8 text-xs text-muted-foreground">
        데이터 : JSONPlaceholder (jsonplaceholder.typicode.com)
      </footer>
    </div>
  );
}

export default Layout;
