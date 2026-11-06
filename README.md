# DAY 34 · Firebase 데이터 연동 및 배포 기초

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day34 https://github.com/GoodPineApple/oz-react07.git day34
cd day34/login-tailwind
npm install
npm run dev
```

## 들어 있는 것

- `login-tailwind/` — DAY 33 실습 02까지 한 코드
- `login-tailwind/firestore.rules` — 실습 02에서 콘솔의 규칙 탭에 붙일 글

## .env.local 복사

새로 받은 폴더에는 `.env.local`이 없습니다. `day34/login-tailwind` 폴더에서 전날 폴더의 파일을 복사합니다. 파일 탐색기로 복사해도 됩니다.

```bash
cp ../../day33/login-tailwind/.env.local .
```

배포를 다시 하려면 같은 자리의 `.firebaserc`도 복사합니다.
