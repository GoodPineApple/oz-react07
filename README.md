# DAY 33 · Firebase 개요 및 인증

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day33 https://github.com/GoodPineApple/oz-react07.git day33
cd day33/login-tailwind
npm install
cp .env.example .env.local
```

`.env.local`의 `=` 뒤에 Firebase 콘솔에서 받은 firebaseConfig 값 여섯을 적은 뒤 켭니다(장표 둘째 섹션). 값이 없으면 흰 화면에 `auth/invalid-api-key`가 뜹니다.

```bash
npm run dev
```

## 들어 있는 것

- `login-tailwind/` — DAY 33 수업의 완성 코드 — 회원가입 · 로그인 · 로그아웃과 로그인 상태 유지
- `login-tailwind/.env.example` — 값을 비운 틀. 복사해 `.env.local`을 만들고 값을 적습니다. `.env.local`은 git에 올라가지 않으니 다음 수업에 복사해 씁니다.
