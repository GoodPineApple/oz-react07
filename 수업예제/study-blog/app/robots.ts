import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// 주소 /robots.txt — 검색 엔진이 둘러봐도 되는 곳
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
