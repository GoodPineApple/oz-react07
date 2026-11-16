# DAY 36 · Supabase와 서비스 완성

수업 시작 전에 `oz-react` 폴더의 터미널에서 칩니다.

```bash
git clone -b day36 https://github.com/GoodPineApple/oz-react07.git day36
cd day36/todo-supabase
npm install
cp .env.example .env.local
npm run dev
```

## 들어 있는 것

- `todo-supabase/` — DAY 36 수업의 완성 코드 — DAY 35의 할 일 노트를 Supabase(로그인 · todos 표)로 옮긴 것
- `todo-supabase/todos.sql` — Supabase SQL Editor에 붙여 넣어 todos 표와 행 보안 정책을 만드는 SQL

## Supabase 준비

1. supabase.com에서 프로젝트를 만듭니다.
2. SQL Editor에 `todos.sql` 을 통째로 붙여 넣고 Run 합니다(한 번만).
3. Authentication의 Sign In / Providers → Email에서 Confirm email을 끕니다(수업용).
4. Connect 창의 Project URL과 Publishable key를 `.env.local` 의 = 뒤에 적습니다.

## 배포

배포하려면 DAY 35 폴더의 `.firebaserc` 를 복사한 뒤 `npm run build` → `firebase deploy` 입니다.

```bash
cp ../../day35/login-tailwind/.firebaserc .
```
