import Image from "next/image";
import Link from "next/link";

// 주소 / — 표지 그림과 글 목록으로 가는 링크
export default function HomePage() {
  return (
    <>
      <Image
        src="/cover.png"
        alt="서버에서 받은 글 표지"
        width={600}
        height={200}
      />
      <h1>서버에서 받은 글</h1>
      <p className="lead">JSONPlaceholder의 글을 서버 컴포넌트에서 받아 그립니다.</p>
      <Link href="/posts">글 목록 보기</Link>
    </>
  );
}
