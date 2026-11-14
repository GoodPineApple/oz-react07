# DAY 38 · Redux Toolkit 최소 실전

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day38 https://github.com/GoodPineApple/oz-react07.git day38
cd day38/todo-react
npm install
npm run dev
```

## 들어 있는 것

- `todo-react/` — DAY 38 수업의 완성 코드 — 할 일을 Redux store(todosSlice · store)에 두고, 컴포넌트가 직접 꺼내고(useSelector) 보내는(useDispatch) 할 일 앱. 맨 위의 `counter-demo.js` · `slice-demo.js` 는 React 없이 Redux만 돌려 보는 예제입니다(`node counter-demo.js`).
- `수업예제/비교_Context/todo-react/` — 같은 앱을 Redux 대신 Context로 만든 판(장표 셋째 섹션에서 비교)
- `zustand-todo/` — 같은 앱을 Zustand로 만든 판(장표 넷째 섹션 「Zustand」) — `cd zustand-todo` → `npm install` → `npm run dev`
- `posts-query/` — DAY 31의 게시판(posts-react)에서 데이터를 받는 곳을 TanStack Query의 `useQuery`로 바꾼 판(장표 다섯째 섹션 「TanStack Query」) — `cd posts-query` → `npm install` → `npm run dev`. JSONPlaceholder에서 글을 받으므로 인터넷이 필요합니다.

오늘은 Firebase를 쓰지 않아 `.env.local`이 필요 없습니다.
