# 7기 React 수업 코드

수업마다 브랜치 하나에 그날 수업의 완성 코드가 들어 있습니다. 받아서 켜 보고 장표의 코드와 비교합니다. 코드는 main이 아니라 `dayNN` 브랜치에 있습니다.

## 코드 받기

`oz-react` 폴더의 터미널에서 칩니다. `day28` 두 곳만 그날 번호로 바꿉니다.

```bash
git clone -b day28 https://github.com/GoodPineApple/oz-react07.git day28
cd day28/hello-react
npm install
npm run dev
```

- `oz-react` 폴더는 수업 코드를 모아 두는 폴더입니다. `oz-lecture` 밖에 새로 만들고 VS Code로 엽니다.
- 받은 코드는 고쳐도 됩니다. 다음 수업은 새 폴더로 받습니다.
- 이 저장소에는 push하지 않습니다. 도전과제는 내 cafe-order 저장소에 push합니다.

## 코드가 꼬였을 때

맨 끝 폴더 이름을 `day28-2`처럼 바꿔 다시 받으면 강사가 올린 최신 코드가 새 폴더에 들어옵니다.

```bash
git clone -b day28 https://github.com/GoodPineApple/oz-react07.git day28-2
```

## 자주 나오는 오류

| 오류 | 까닭 · 고치는 법 |
|---|---|
| `fatal: destination path 'oz-react07' already exists …` | 맨 끝 폴더 이름을 안 적음 — `day29`처럼 적습니다 |
| `fatal: destination path 'day28' already exists …` | 같은 이름의 폴더가 있음 — 끝 이름을 `day28-2`로 바꿉니다 |
| `fatal: Remote branch day99 not found in upstream origin` | 브랜치 이름이 틀림 — 아래 목록에서 번호를 확인합니다 |
| `npm error enoent Could not read package.json` | 프로젝트 폴더 밖 — `cd hello-react`처럼 들어갑니다 |

## 브랜치 목록

| 수업 | 주제 | 브랜치 |
|---|---|---|
| DAY 28 | React 개요 및 JSX | `day28` |
| DAY 29 | React 상태 관리 기초 | `day29` |
| DAY 30 | 리스트 렌더링과 폼 처리 | `day30` |
| DAY 31 | React Router와 페이지 흐름 | `day31` |
| DAY 32 | React 스타일링 | `day32` |
| DAY 33 | Firebase 개요 및 인증 | `day33` |
| DAY 34 | Firebase 데이터 연동 및 배포 기초 | `day34` |
| DAY 35 | 상태 흐름 점검 및 인증 연동 강화 | `day35` |
| DAY 36 | Supabase와 서비스 완성 | `day36` |
| DAY 37 | Context API와 전역 상태 관리 개념 | `day37` |
| DAY 38 | Redux Toolkit 최소 실전 | `day38` |
| DAY 39 | 커스텀 훅과 React 성능 최적화 기초 | `day39` |
| DAY 40 | Next.js 기초와 SEO/GEO | `day40` |
| DAY 41 | TypeScript 기초 | `day41` |
| DAY 42 | React + TypeScript 적용 | `day42` |

`day36` 브랜치는 수업 전에 올립니다.
