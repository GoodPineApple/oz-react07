# DAY 41 · TypeScript 기초

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day41 https://github.com/GoodPineApple/oz-react07.git day41
cd day41/hello-ts
npm install
npx tsc
node dist/cart.js
node dist/order.js
```

## 들어 있는 것

- `hello-ts/` — DAY 41 수업의 완성 코드 — DAY 14의 장바구니를 TypeScript로 옮긴 `src/cart.ts`(type CartItem · lineTotal)와 카페 주문의 모양을 union · interface · 선택 속성 · 함수 타입으로 정한 `src/order.ts`. `npx tsc` 로 검사하고 `dist` 에 쓴 .js를 node로 실행합니다.
- `수업예제/ts-examples/` — 장표의 코드 28개. 일부러 틀린 줄이 있어 `npx tsc --noEmit` 에 오류 17개가 나오는 것이 정상
- `재료/cart.js` — DAY 14의 장바구니 그대로. 장표의 「이름만 .ts로 바꾼 DAY 14 cart.js의 오류 셋」을 해 보려면 이 파일을 `src/cart.ts` 로 복사해 `npx tsc`

오늘은 Firebase를 쓰지 않아 `.env.local` 이 필요 없습니다. 받는 패키지는 typescript 하나입니다.
