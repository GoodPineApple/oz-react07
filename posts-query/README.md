# posts-query

DAY 31의 게시판(posts-react)에서 데이터를 받는 부분만 TanStack Query(`@tanstack/react-query`)의 `useQuery`로 바꾼 프로젝트입니다. (DAY 38)
연습용 서버 JSONPlaceholder(https://jsonplaceholder.typicode.com)의 글 · 작성자 · 댓글을 받아 주소마다 나눠 보여 줍니다.

## 실행 방법

react-router 8.4.0은 Node.js 22.22 이상을 요구합니다(engines `>=22.22.0`). 그보다 낮으면 `npm install` 때 `EBADENGINE` 경고가 나오지만, 설치 · 실행은 됩니다.
화면마다 JSONPlaceholder에서 데이터를 받으므로 인터넷이 필요합니다.

```bash
npm install
npm run dev
```

터미널에 나온 주소(http://localhost:5173/)를 브라우저로 엽니다.

## DAY 31 posts-react에서 바뀐 곳

| 파일 | 바뀐 곳 |
|---|---|
| `package.json` | 이름 `posts-query`, dependencies에 `@tanstack/react-query` (함께 쓰는 `@tanstack/query-core`도 받음) |
| `src/main.jsx` | `new QueryClient()`로 받은 데이터를 기억해 둘 곳을 만들고, `<QueryClientProvider client={queryClient}>`로 앱을 감쌈 |
| `src/pages/PostsPage.jsx` | `useState` · `useEffect` 대신 `fetchPosts` 함수 + `useQuery({ queryKey: ["posts", userId], queryFn })` |
| `src/pages/PostPage.jsx` | `fetchPost` 함수(글 하나와 댓글) + `useQuery({ queryKey: ["post", id], queryFn })` |
| `src/pages/UsersPage.jsx` | `fetchUsers` 함수 + `useQuery({ queryKey: ["users"], queryFn })` |

`useQuery`가 돌려주는 `data` · `isPending` · `error`로 「불러오는 중…」 · 오류 글 · 목록을 고릅니다. 한 번 받은 데이터는 `queryKey`로 기억해 두었다가, 같은 화면을 다시 열면 바로 보여 주고 새 데이터는 뒤에서 받습니다.

## 주소

| 주소 | 페이지 | 받는 데이터 | queryKey |
|---|---|---|---|
| `/` | HomePage — 소개, 글 번호로 바로 가기 | — | — |
| `/posts` | PostsPage — 글 목록 | `GET /posts` (100개) | `["posts", null]` |
| `/posts?userId=3` | PostsPage — 3번 작성자의 글 | `GET /posts?userId=3` (10개) | `["posts", "3"]` |
| `/posts/3` | PostPage — 글 하나와 댓글 | `GET /posts/3`, `GET /comments?postId=3` | `["post", "3"]` |
| `/users` | UsersPage — 작성자 | `GET /users` (10명) | `["users"]` |
| 그 밖 | NotFoundPage | — | — |

## 명령어

| 명령어 | 하는 일 |
|---|---|
| `npm run dev` | 개발 서버 켜기 |
| `npm run build` | `dist` 폴더에 배포할 파일 만들기 |
| `npm run preview` | 만든 `dist`를 미리 보기 |
| `npm run lint` | Oxlint로 코드 검사 |
