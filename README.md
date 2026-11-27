# DAY 42 · 프론트엔드 최종 정리

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다. 오늘은 강사 저장소 my-next-app과 이 브랜치의 공부 노트를 씁니다.

```bash
git clone https://github.com/GoodPineApple/my-next-app.git
cd my-next-app
npm install
npm run dev
```

```bash
cd ..
git clone -b day42 https://github.com/GoodPineApple/oz-react07.git day42
cd day42/study-blog
npm install
npm run dev
```

두 앱 모두 주소가 http://localhost:3000 이라 하나를 끄고(Ctrl + C) 다른 하나를 켭니다.

## 들어 있는 것

- `study-blog/` — 공부 노트(Next.js 16.4.6 + TypeScript) — DAY 40의 공부 노트를 TypeScript로 옮긴 판입니다. `lib/posts.ts` 의 interface Post와 글 셋은 DAY 43(데이터베이스)에서 다시 봅니다. `npm run build` 는 타입 검사(「Running TypeScript ...」)까지 합니다.
- my-next-app(별도 저장소 https://github.com/GoodPineApple/my-next-app) — 같은 할 일 앱을 Route API(`/todo-route`) · 서버 컴포넌트(`/todo-server`) · 클라이언트 컴포넌트(`/todo-client`) 세 방식으로 만든 예제입니다.

## Vercel에 올려 보려면

이 폴더는 수업 저장소를 받은 것이라 여기서는 push할 수 없습니다. `study-blog` 폴더를 `day42` 밖으로 복사해(예 : `oz-react/my-blog`) VS Code로 열고, 소스 제어에서 리포지토리 초기화 → 커밋 → GitHub에 게시(공개)한 뒤 vercel.com의 New Project에서 그 저장소를 Import → Deploy 합니다. 장표 48 · 49장.

오늘은 Firebase를 쓰지 않아 `.env.local` 이 필요 없습니다.
