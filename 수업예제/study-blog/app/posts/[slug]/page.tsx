import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Comments from "@/app/_components/Comments";
import LikeButton from "@/app/_components/LikeButton";
import { getPost, getPosts } from "@/lib/posts";

// 이 페이지가 받는 props — params는 [slug] 값을 나중에 주는 Promise
type Props = {
  params: Promise<{ slug: string }>;
};

// 빌드할 때 미리 만들 주소 — 글마다 하나
export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

// 글마다 다른 제목과 설명 — <title>과 <meta name="description">이 됨
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

// 주소 /posts/[slug] — 글 하나
export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  // 검색 엔진과 AI가 읽는 구조화 데이터 (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header>
        <h1>{post.title}</h1>
        <time className="date" dateTime={post.date}>
          {post.date}
        </time>
        <p className="summary">{post.summary}</p>
      </header>
      {post.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </section>
      ))}
      <section>
        <h2>참고</h2>
        <ul>
          {post.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url}>{source.name}</a>
            </li>
          ))}
        </ul>
      </section>
      <LikeButton />
      <Comments postId={post.id} />
    </article>
  );
}
