"use client"; // 오류가 나면 /posts 자리에 보이는 화면 — 클라이언트 컴포넌트
export default function PostsError({ retry }) {
  return (
    <>
      <h1>글을 불러오지 못했습니다</h1>
      <button type="button" className="retry" onClick={() => retry()}>
        다시 시도
      </button>
    </>
  );
}
