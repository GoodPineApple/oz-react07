# DAY 42 · React + TypeScript 적용

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day42 https://github.com/GoodPineApple/oz-react07.git day42
cd day42/study-blog
npm install
npm run dev
```

주소는 http://localhost:3000 입니다. 개발 서버를 끄려면 Ctrl + C.

## 들어 있는 것

- `study-blog/` — DAY 42 수업의 완성 코드 — DAY 40의 공부 노트(Next.js)를 TypeScript로 옮긴 것입니다. 파일을 `.tsx` · `.ts` 로 바꾸고 `tsconfig.json`(strict)을 두었고, 글의 모양(`lib/posts.ts` 의 interface Post), 레이아웃 children · 글 페이지 params의 타입, 글 찾기(`app/_components/PostSearch.tsx` — props · state · 이벤트), 댓글(`app/_components/Comments.tsx` — 연습용 API의 응답 타입), 사이트 주소(`lib/site.ts` — Vercel이 넣어 주는 주소)를 더했습니다.
- `npm run build` 는 타입 검사(「Running TypeScript ...」)까지 합니다. `npm run dev` 는 타입을 검사하지 않습니다.

## Vercel에 올려 보려면

이 폴더는 수업 저장소를 받은 것이라 여기서는 push할 수 없습니다. `study-blog` 폴더를 `day42` 밖으로 복사해(예 : `oz-react/my-blog`) VS Code로 열고, 소스 제어에서 리포지토리 초기화 → 커밋 → GitHub에 게시(공개)한 뒤 vercel.com의 New Project에서 그 저장소를 Import → Deploy 합니다. 장표 42 · 43장.

오늘은 Firebase를 쓰지 않아 `.env.local` 이 필요 없습니다.
