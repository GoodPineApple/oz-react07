// 주소 /robots.txt — 검색 엔진이 둘러봐도 되는 곳
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://example.com/sitemap.xml",
  };
}
