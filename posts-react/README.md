# posts-react

연습용 서버 JSONPlaceholder(https://jsonplaceholder.typicode.com)의 글 · 작성자 · 댓글을 받아 주소마다 나눠 보여 주는 게시판입니다. DAY 31의 React Router 연습 프로젝트를 DAY 32에서 **shadcn/ui 컴포넌트와 Tailwind CSS**로 꾸몄습니다(DAY 32 장표 33 · 34 · 41~46장).

## 실행 방법

react-router 8.4.0은 Node.js 22.22 이상을 요구합니다(engines `>=22.22.0`). 그보다 낮으면 `npm install` 때 `EBADENGINE` 경고가 나오지만, Node.js 22.19.0에서도 설치 · 실행은 됐습니다.
화면마다 JSONPlaceholder에서 데이터를 받으므로 인터넷이 필요합니다.

```bash
npm install
npm run dev
```

터미널에 나온 주소(http://localhost:5173/)를 브라우저로 엽니다. 창 폭을 바꿔 보면 글 카드가 한 칸(640px 아래) → 두 칸(sm, 640px 이상) → 세 칸(lg, 1024px 이상)으로 바뀝니다.

## 주소

| 주소 | 페이지 | 받는 데이터 |
|---|---|---|
| `/` | HomePage — 소개, 글 번호로 바로 가기 | — |
| `/posts` | PostsPage — 글 목록 | `GET /posts` (100개) |
| `/posts?userId=3` | PostsPage — 3번 작성자의 글 | `GET /posts?userId=3` (10개) |
| `/posts/3` | PostPage — 글 하나와 댓글 | `GET /posts/3`, `GET /comments?postId=3` |
| `/users` | UsersPage — 작성자 | `GET /users` (10명) |
| 그 밖 | NotFoundPage | — |

## shadcn/ui가 넣은 파일

| 파일 | 하는 일 |
|---|---|
| `components.json` | shadcn/ui 설정 — 스타일(radix-nova), `"tsx": false`(JSX로 받음), 별칭(@/components · @/lib/utils) |
| `src/components/ui/button.jsx` · `card.jsx` · `badge.jsx` · `input.jsx` | `npx shadcn add`로 받은 컴포넌트 — variant마다 Tailwind 클래스가 적혀 있어 직접 열어 고칠 수 있음 |
| `src/lib/utils.js` | 클래스를 합치는 `cn` |
| `src/index.css` | `@import "tailwindcss";` 와 shadcn/ui의 테마 색 변수 |

`jsconfig.json` 의 paths와 `vite.config.js` 의 `resolve.alias` 로 `@/` 가 `src/` 를 가리킵니다 — `import { Button } from "@/components/ui/button";`

## 명령어

| 명령어 | 하는 일 |
|---|---|
| `npm run dev` | 개발 서버 켜기 |
| `npm run build` | `dist` 폴더에 배포할 파일 만들기 |
| `npm run preview` | 만든 `dist`를 미리 보기 |
| `npm run lint` | Oxlint로 코드 검사 |

## 만든 방법

DAY 31의 posts-react(React 19.3.0 · Vite 8.3.4 · react-router 8.4.0)에서 2026년 11월 13일에 —

1. `npm install tailwindcss@4.3.5 @tailwindcss/vite@4.3.5`
2. jsconfig.json(`"@/*": ["./src/*"]`)과 vite.config.js(`tailwindcss()`, `resolve.alias`)
3. `npx shadcn@4.23.0 init -b radix -p nova --no-monorepo --no-rtl`
4. `npx shadcn@4.23.0 add button card badge` · `npx shadcn@4.23.0 add input`
5. 페이지 다섯과 Layout을 shadcn/ui 컴포넌트로 다시 꾸밈 — 데이터를 받는 코드는 DAY 31과 같음

vite.config.js의 별칭은 shadcn/ui 문서 예의 `path.resolve(__dirname, "./src")` 대신 `path.resolve(import.meta.dirname, "./src")` 로 적었습니다 — `__dirname` 이면 Vite 8.3.4가 `npm run dev` 마다 `configLoader: 'native'` 경고를 냅니다. `.oxlintrc.json` 에는 `src/components/ui/**` 에서만 `react/only-export-components` 를 끄는 overrides를 더했습니다(button.jsx가 Button과 buttonVariants를 함께 내보냄).
