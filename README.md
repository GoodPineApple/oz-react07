# DAY 38 · Redux Toolkit 최소 실전

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day38 https://github.com/GoodPineApple/oz-react07.git day38
cd day38/todo-react
npm install
npm run dev
```

## 들어 있는 것

- `todo-react/` — DAY 38 수업의 완성 코드 — 할 일을 Redux store(todosSlice · store)에 두고, 컴포넌트가 직접 꺼내고(useSelector) 보내는(useDispatch) 할 일 앱. 장표에서 터미널로 돌리는 `counter-demo.js` · `slice-demo.js` 도 이 폴더에 있습니다(`node counter-demo.js`).
- `수업예제/비교_Context/todo-react/` — 같은 앱을 Redux 대신 Context로 만든 판(장표 넷째 섹션에서 비교)

오늘은 Firebase를 쓰지 않아 `.env.local`이 필요 없습니다.
