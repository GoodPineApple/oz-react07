# posts-react

연습용 서버 JSONPlaceholder(https://jsonplaceholder.typicode.com)의 글 · 작성자 · 댓글을 받아 주소마다 나눠 보여 주는 React Router 연습 프로젝트입니다. (DAY 31)

## 실행 방법

react-router 8.4.0은 Node.js 22.22 이상을 요구합니다(engines `>=22.22.0`). 그보다 낮으면 `npm install` 때 `EBADENGINE` 경고가 나오지만, Node.js 22.19.0에서도 설치 · 실행은 됐습니다.
화면마다 JSONPlaceholder에서 데이터를 받으므로 인터넷이 필요합니다.

```bash
npm install
npm run dev
```

터미널에 나온 주소(http://localhost:5173/)를 브라우저로 엽니다.

## 주소

| 주소 | 페이지 | 받는 데이터 |
|---|---|---|
| `/` | HomePage — 소개, 글 번호로 바로 가기 | — |
| `/posts` | PostsPage — 글 목록 | `GET /posts` (100개) |
| `/posts?userId=3` | PostsPage — 3번 작성자의 글 | `GET /posts?userId=3` (10개) |
| `/posts/3` | PostPage — 글 하나와 댓글 | `GET /posts/3`, `GET /comments?postId=3` |
| `/users` | UsersPage — 작성자 | `GET /users` (10명) |
| 그 밖 | NotFoundPage | — |

## 명령어

| 명령어 | 하는 일 |
|---|---|
| `npm run dev` | 개발 서버 켜기 |
| `npm run build` | `dist` 폴더에 배포할 파일 만들기 |
| `npm run preview` | 만든 `dist`를 미리 보기 |
| `npm run lint` | Oxlint로 코드 검사 |

## 만든 방법

package.json · package-lock.json · vite.config.js · .oxlintrc.json은 DAY 27의 hello-react(`npm create vite@latest` — React · JavaScript · Oxlint, create-vite 9.2.1)와 같은 판에 react-router 8.4.0을 더한 것이고 이름만 posts-react로 바꿨습니다(React 19.3.0 · Vite 8.3.4).
