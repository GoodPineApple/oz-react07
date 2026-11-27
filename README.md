# DAY 41 · TypeScript 기초와 React 적용

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day41 https://github.com/GoodPineApple/oz-react07.git day41
cd day41/todo-react
npm install
npm run build
npm run dev
```

주소는 http://localhost:5173 입니다. 개발 서버를 끄려면 Ctrl + C.

## 들어 있는 것

- `todo-react/` — DAY 41 수업의 완성 코드 — DAY 30의 할 일 앱을 TypeScript로 바꾼 것입니다. Vite react-ts 템플릿의 tsconfig, 할 일의 모양(`src/types.ts` 의 interface Todo), 컴포넌트 props의 interface를 더했습니다. `npm run build` 는 타입 검사(`tsc -b`)를 먼저 하고, 오류가 없으면 `vite build` 로 넘어갑니다. `npm run dev` 는 타입을 검사하지 않습니다.
- `수업예제/study-blog/` — 공부 노트(DAY 40)를 TypeScript로 옮긴 판(Next.js 16.4.6)입니다. `cd ../수업예제/study-blog` → `npm install` → `npm run dev`(주소 http://localhost:3000).
- `수업예제/todo-node/` — Node로 돌리는 짧은 예제(`src/todo.ts`)입니다. `cd ../수업예제/todo-node` → `npm install` → `npx tsc`(오류가 없으면 `dist/todo.js` 를 만듦) → `node dist/todo.js`.

오늘은 Firebase를 쓰지 않아 `.env.local` 이 필요 없습니다.
