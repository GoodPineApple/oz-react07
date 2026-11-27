import type { Metadata } from "next";

// 이 페이지의 제목 — 레이아웃의 template과 합쳐 「소개 | 공부 노트」
export const metadata: Metadata = {
  title: "소개",
  description: "1인 창업가 개발부트캠프 7기에서 React를 배우며 정리한 공부 노트를 소개합니다.",
};

// 주소 /about — 소개
export default function AboutPage() {
  return (
    <>
      <h1>소개</h1>
      <p>1인 창업가 개발부트캠프 7기에서 React를 배우며 정리한 노트입니다.</p>
      <p>글마다 함께 읽은 공식 문서를 적어 두었습니다.</p>
    </>
  );
}
