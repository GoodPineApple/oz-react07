# DAY 34 · Firebase 데이터 연동 및 배포 기초

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day34 https://github.com/GoodPineApple/oz-react07.git day34
cd day34/login-tailwind
npm install
cp ../../day33/login-tailwind/.env.local .
npm run dev
```

## 들어 있는 것

- `login-tailwind/` — DAY 34 수업의 완성 코드 — Firestore에 내 할 일을 적고 · 체크하고 · 지우는 할 일 노트
- `login-tailwind/firestore.rules` — 콘솔의 규칙 탭에 붙이는 「본인만」 규칙
- `login-tailwind/firebase.json` — Firebase Hosting 설정(`firebase init hosting`이 만든 것)

## .env.local 복사

새로 받은 폴더에는 `.env.local`이 없습니다. `day34/login-tailwind` 폴더에서 전날 폴더의 파일을 복사합니다(위의 `cp` 줄). 파일 탐색기로 복사해도 됩니다. 어제 `.env.local`을 만들지 못했으면 `.env.example`을 복사해 DAY 33처럼 값을 적습니다.

배포에 쓰는 `.firebaserc`(고른 프로젝트 ID)는 사람마다 달라 저장소에 넣지 않았습니다.
