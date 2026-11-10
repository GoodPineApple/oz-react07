import { getPosts } from "@/lib/posts";

// 실제 사이트 주소 — 배포한 주소로 바꿈 (example.com은 예시용 도메인)
const SITE = "https://example.com";

// 주소 /sitemap.xml — 이 사이트의 페이지 목록
export default function sitemap() {
  const postPages = getPosts().map((post) => ({
    url: `${SITE}/posts/${post.slug}`,
    lastModified: post.date,
  }));

  return [{ url: SITE }, { url: `${SITE}/about` }, ...postPages];
}
