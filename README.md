# DAY 37 · Context API와 전역 상태 관리 개념

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day37 https://github.com/GoodPineApple/oz-react07.git day37
cd day37/login-tailwind
npm install
cp ../../day35/login-tailwind/.env.local .
npm run dev
```

## 들어 있는 것

- `login-tailwind/` — DAY 37 수업의 완성 코드 — 밝게 · 어둡게 단추(ThemeContext)와, 로그인 정보를 나눠 주는 AuthProvider(AuthContext)

## .env.local 복사

새로 받은 폴더에는 `.env.local`이 없습니다. `day37/login-tailwind` 폴더에서 DAY 35 폴더의 파일을 복사합니다(위의 `cp` 줄). 파일 탐색기로 복사해도 됩니다.

배포를 다시 하려면 같은 자리의 `.firebaserc`도 복사합니다.
