import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

// 주소 /sitemap.xml — 이 사이트의 페이지 목록
export default function sitemap(): MetadataRoute.Sitemap {
  const postPages = getPosts().map((post) => ({
    url: `${SITE}/posts/${post.slug}`,
    lastModified: post.date,
  }));

  return [{ url: SITE }, { url: `${SITE}/about` }, ...postPages];
}
