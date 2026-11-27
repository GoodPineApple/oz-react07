import Link from "next/link";

// 없는 주소 — notFound()를 부르거나 맞는 page가 없을 때
export default function NotFound() {
  return (
    <>
      <h1>찾는 글이 없습니다</h1>
      <p>주소를 다시 확인해 주세요.</p>
      <Link href="/">글 목록으로</Link>
    </>
  );
}
