# DAY 40 · Next.js 기초와 SEO/GEO

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day40 https://github.com/GoodPineApple/oz-react07.git day40
cd day40/study-blog
npm install
npm run dev
```

개발 서버 주소는 http://localhost:3000 입니다.

## 들어 있는 것

- `study-blog/` — DAY 40 수업의 완성 코드 — 「공부 노트」 : 글 세 편(`lib/posts.js`)을 글 목록 · 글 하나 · 소개 · 없는 글 페이지로 그리고, 페이지마다 다른 제목과 설명(metadata · generateMetadata), robots.txt · sitemap.xml, 글 페이지의 JSON-LD와 공감 단추(`"use client"`)를 단 Next.js 16.4.6 프로젝트. DAY 42에서 이 프로젝트에 TypeScript를 적용하고 배포까지 합니다.
- `수업예제/now/page.js` — 장표의 /now 예제 — `study-blog/app/now/page.js` 로 넣고 `npm run build` 하면 빌드 표에 ◐ /now가 생기는 페이지(틀은 빌드 때, 요청 시각은 요청 때)

오늘은 Firebase를 쓰지 않아 `.env.local` 이 필요 없습니다.
