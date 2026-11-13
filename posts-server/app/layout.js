import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "서버에서 받은 글",
  description: "JSONPlaceholder의 글을 서버 컴포넌트에서 받아 그리는 예제입니다.",
};

// 모든 페이지를 감싸는 레이아웃 — 머리말 · 본문
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <Link href="/" className="logo">
            서버에서 받은 글
          </Link>
          <nav>
            <Link href="/">홈</Link>
            <Link href="/posts">글 목록</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
