# DAY 38 · React 상태 관리

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day38 https://github.com/GoodPineApple/oz-react07.git day38
cd day38/zustand-todo
npm install
npm run dev
```

## 들어 있는 것

- `zustand-todo/` — DAY 38 수업의 완성 코드 — 할 일을 Zustand store(`src/stores/todosStore.js`)에 두고, 컴포넌트가 hook(`useTodosStore`)으로 꺼내고 store의 함수를 바로 부르는 할 일 앱(장표 57~61장)
- `todo-react/` — 같은 앱을 Redux Toolkit으로 만든 판(todosSlice · store, useSelector · useDispatch — 장표 둘째 섹션). 맨 위의 `counter-demo.js` · `slice-demo.js` 는 React 없이 Redux만 돌려 보는 예제입니다(`node counter-demo.js`).
- `수업예제/비교_Context/todo-react/` — 같은 앱을 Context로 만든 판(장표 15 · 16장)
- `posts-query/` — DAY 31의 게시판(posts-react)에서 데이터를 받는 곳을 TanStack Query의 `useQuery`로 바꾼 판(장표 넷째 섹션). JSONPlaceholder에서 글을 받으므로 인터넷이 필요합니다.

견줄 판도 `day38` 폴더에서 그 폴더로 들어가(예: `cd todo-react`) `npm install` → `npm run dev` 로 켭니다. 오늘은 Firebase를 쓰지 않아 `.env.local`이 필요 없습니다.
