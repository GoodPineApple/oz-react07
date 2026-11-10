# DAY 35 · 상태 흐름 점검 및 인증 연동 강화

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day35 https://github.com/GoodPineApple/oz-react07.git day35
cd day35/login-tailwind
npm install
cp ../../day34/login-tailwind/.env.local .
npm run dev
```

## 들어 있는 것

- `login-tailwind/` — DAY 35 수업의 완성 코드 — 주소(/ · /login)를 잇는 PrivateRoute · LoginPage와, 모든 페이지 위의 머리말(Layout · Header)

## .env.local 복사

새로 받은 폴더에는 `.env.local`이 없습니다. `day35/login-tailwind` 폴더에서 전날 폴더의 파일을 복사합니다(위의 `cp` 줄). 파일 탐색기로 복사해도 됩니다.

배포를 다시 하려면 같은 자리의 `.firebaserc`도 복사합니다.
