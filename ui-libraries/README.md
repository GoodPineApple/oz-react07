# ui-libraries

같은 글 목록 — 연습용 서버 JSONPlaceholder(https://jsonplaceholder.typicode.com)의 글 — 을 UI 라이브러리 넷으로 그린 앱입니다. (DAY 32 장표 25 · 27 · 29 · 31 · 35 · 36장)

| 폴더 | 라이브러리 | 받은 패키지 |
|---|---|---|
| `mui-posts/` | MUI(Material UI) | @mui/material 9.5.0 · @emotion/react 11.14.0 · @emotion/styled 11.14.1 |
| `antd-posts/` | Ant Design | antd 6.7.0 |
| `bootstrap-posts/` | React Bootstrap | react-bootstrap 2.10.10 · bootstrap 5.3.9 |
| `heroui-posts/` | HeroUI | @heroui/react · @heroui/styles 3.2.7, tailwindcss · @tailwindcss/vite 4.3.5 |

넷 모두 데이터를 받는 코드(useSearchParams · useEffect · fetch)는 DAY 31의 posts-react와 같고, 그리는 부분(머리띠 · 단추 · 카드 · 칸 나누기)만 그 라이브러리의 컴포넌트로 바꿨습니다. 완성 코드 ①(shadcn/ui)은 `../posts-react/` 입니다.

## 실행 방법

폴더마다 따로 받고 켭니다. react-router 8.4.0은 Node.js 22.22 이상을 요구합니다(engines `>=22.22.0`) — 그보다 낮으면 `npm install` 때 `EBADENGINE` 경고가 나오지만, Node.js 22.19.0에서도 설치 · 실행은 됐습니다. 글을 JSONPlaceholder에서 받으므로 인터넷이 필요합니다.

```bash
cd mui-posts
npm install
npm run dev
```

터미널에 나온 주소(http://localhost:5173/)를 브라우저로 엽니다. 주소 뒤에 `?userId=3` 을 붙이면(또는 작성자 단추 「3」을 누르면) 3번 작성자의 글 10개만 나옵니다. 다른 앱은 `cd ../antd-posts` 처럼 옮겨 같은 명령을 칩니다(먼저 켠 개발 서버가 5173을 쓰고 있으면 다음 번호로 켜짐).

## 라이브러리마다 다른 곳

| 앱 | 단추 고르기 | 칸 나누기 | CSS |
|---|---|---|---|
| mui-posts | `variant="contained"` · `"outlined"` | `Grid size={{ xs: 12, sm: 6, md: 4 }}` — 한 줄 12칸 | 없음(@emotion — JS 안) |
| antd-posts | `type="primary"` · `"default"` | `Col xs={24} sm={12} lg={8}` — 한 줄 24칸 | 없음(JS 안) |
| bootstrap-posts | `variant="primary"` · `"outline-primary"` | `Row xs={1} sm={2} lg={3}` — 한 줄의 카드 수 | `import "bootstrap/dist/css/bootstrap.min.css"` |
| heroui-posts | `variant="primary"` · `"outline"`, 클릭은 `onPress` | Tailwind `grid sm:grid-cols-2 lg:grid-cols-3` | index.css에 `@import "tailwindcss";` 다음 `@import "@heroui/styles";` |

## 확인한 것 (2026년 11월 13일)

깨끗한 사본(node_modules · dist 없이 옮긴 것)에서 `npm install` → `npm run lint`(경고 없음) → `npm run build` 로 다시 확인했습니다(Node.js 22.19.0 · npm 10.9.3).

| 앱 | 설치된 패키지 | build |
|---|---|---|
| mui-posts | 107개 | JS 396.35 kB |
| antd-posts | 95개 | JS 628.27 kB |
| bootstrap-posts | 65개 | CSS 230.30 kB · JS 293.71 kB |
| heroui-posts | 98개 | CSS 469.59 kB · JS 340.80 kB |

`npm run build` 뒤 `npm run preview` 로 /posts?userId=3을 창 폭 375 · 1024에서 열어 Console에 경고 · 오류가 없는 것을 보았습니다(headless Chrome 157). 375에서는 넷 모두 한 줄에 카드 하나, 1024에서는 세 장씩입니다.

## 명령어

| 명령어 | 하는 일 |
|---|---|
| `npm run dev` | 개발 서버 켜기 |
| `npm run build` | `dist` 폴더에 배포할 파일 만들기 |
| `npm run preview` | 만든 `dist`를 미리 보기 |
| `npm run lint` | Oxlint로 코드 검사 |
