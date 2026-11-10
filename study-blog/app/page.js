import Link from "next/link";
import { getPosts } from "@/lib/posts";

// 주소 / — 글 목록
export default function HomePage() {
  const posts = getPosts();

  return (
    <>
      <h1>공부 노트</h1>
      <p className="lead">React를 배우며 정리한 글 {posts.length}편</p>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
