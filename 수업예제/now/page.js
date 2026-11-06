import { Suspense } from "react";
import { connection } from "next/server";

// 요청이 올 때마다 서버가 그리는 부분
async function RequestTime() {
  await connection(); // 여기서부터는 빌드 때가 아니라 요청 때 그림
  const now = new Date().toLocaleTimeString("ko-KR", { timeZone: "Asia/Seoul" });
  return <p>요청 시각 : {now}</p>;
}

// 주소 /now — 틀은 빌드 때, 시각은 요청 때
export default function NowPage() {
  return (
    <>
      <h1>지금 시각</h1>
      <p>이 문장은 빌드할 때 HTML로 만들어 둡니다.</p>
      <Suspense fallback={<p>시각을 불러오는 중…</p>}>
        <RequestTime />
      </Suspense>
    </>
  );
}
