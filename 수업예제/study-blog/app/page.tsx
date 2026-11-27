import PostSearch from "@/app/_components/PostSearch";
import { getPosts } from "@/lib/posts";

// 주소 / — 글 목록과 글 찾기
export default function HomePage() {
  const posts = getPosts();

  return (
    <>
      <h1>공부 노트</h1>
      <p className="lead">React를 배우며 정리한 글 {posts.length}편</p>
      <PostSearch posts={posts} />
    </>
  );
}
