import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

// 모든 페이지의 기본 메타데이터 — 페이지가 title을 정하면 template의 %s 자리에 들어감
export const metadata: Metadata = {
  title: {
    default: "공부 노트",
    template: "%s | 공부 노트",
  },
  description:
    "React를 배우며 useState, useEffect, 커스텀 훅을 하나씩 정리한 공부 노트입니다.",
};

// 레이아웃이 받는 props — children은 그 주소의 페이지
interface RootLayoutProps {
  children: React.ReactNode;
}

// 모든 페이지를 감싸는 레이아웃 — 머리말 · 본문 · 꼬리말
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <Link href="/" className="logo">
            공부 노트
          </Link>
          <nav>
            <Link href="/">글 목록</Link>
            <Link href="/about">소개</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">7기 수업 예제 · Next.js 16</footer>
      </body>
    </html>
  );
}
