# DAY 39 · 커스텀 훅과 React 성능 최적화 기초

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day39 https://github.com/GoodPineApple/oz-react07.git day39
cd day39/post-board
npm install
npm run dev
```

## 들어 있는 것

- `post-board/` — DAY 39 수업의 완성 코드 — 「게시판 읽기」 : 글 목록과 댓글을 useFetch(커스텀 훅) 하나로 받고, ★ 관심 글은 memo · useCallback · useMemo로 다시 그리기를 줄이고, 글 보기는 lazy · Suspense로 나눠 받습니다. JSONPlaceholder에 요청하므로 인터넷이 필요합니다.
- `수업예제/online-status/` — 장표의 커스텀 훅 예제 프로젝트(useOnlineStatus)
- `수업예제/App_적용전.jsx` — 받아 오기를 훅으로 옮기기 전의 App.jsx

오늘은 Firebase를 쓰지 않아 `.env.local`이 필요 없습니다.
