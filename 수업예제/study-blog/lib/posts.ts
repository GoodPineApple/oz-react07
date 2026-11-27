// 공부 노트의 글 — 지금은 파일에 두고, 나중에는 데이터베이스나 API에서 받아 옴

// 글 안의 소제목 하나
export interface Section {
  heading: string;
  body: string;
}

// 함께 읽은 문서 하나
export interface Source {
  name: string;
  url: string;
}

// 글 한 편의 모양 — 여러 파일이 함께 쓰므로 export
export interface Post {
  id: number; // 글 번호 — 댓글을 받아 올 때 씀
  slug: string;
  title: string;
  date: string;
  summary: string;
  sections: Section[];
  sources: Source[];
}

const posts: Post[] = [
  {
    id: 1,
    slug: "use-state",
    title: "useState — 바뀌는 값을 기억하는 훅",
    date: "2026-10-01",
    summary:
      "useState는 다시 그려도 값을 기억하고, set 함수로 값을 바꾸면 화면을 다시 그리게 하는 React 훅입니다.",
    sections: [
      {
        heading: "언제 쓰나",
        body: "누를 때마다 늘어나는 숫자, 입력 칸의 글처럼 화면에 보이면서 바뀌는 값에 씁니다. 그냥 변수는 다시 그릴 때 처음 값으로 돌아가고, 바꿔도 화면이 다시 그려지지 않습니다.",
      },
      {
        heading: "쓰는 법",
        body: "const [count, setCount] = useState(0)처럼 씁니다. 첫째는 지금 값, 둘째는 값을 바꾸는 함수입니다. 이전 값으로 계산할 때는 setCount((prev) => prev + 1)처럼 업데이트 함수를 넘깁니다.",
      },
    ],
    sources: [
      { name: "React 문서 — useState", url: "https://ko.react.dev/reference/react/useState" },
    ],
  },
  {
    id: 2,
    slug: "use-effect",
    title: "useEffect — 그린 뒤에 할 일",
    date: "2026-10-02",
    summary:
      "useEffect는 화면을 그린 뒤에 할 일을 적는 React 훅이고, 의존성 배열로 언제 다시 실행할지 정합니다.",
    sections: [
      {
        heading: "의존성 배열",
        body: "빈 배열이면 처음 그린 뒤 한 번, [count]이면 count가 바뀔 때마다, 배열을 빼면 그릴 때마다 실행됩니다.",
      },
      {
        heading: "정리 함수",
        body: "Effect가 돌려주는 함수는 다음 실행 전이나 컴포넌트가 사라질 때 불립니다. 타이머를 멈추거나 늦게 온 응답을 버릴 때 씁니다.",
      },
    ],
    sources: [
      { name: "React 문서 — useEffect", url: "https://ko.react.dev/reference/react/useEffect" },
    ],
  },
  {
    id: 3,
    slug: "custom-hook",
    title: "커스텀 훅 — 되풀이되는 로직을 함수로",
    date: "2026-10-11",
    summary:
      "커스텀 훅은 이름이 use로 시작하고 안에서 다른 훅을 부르는 함수로, 여러 컴포넌트에 되풀이되는 로직을 나눠 씁니다.",
    sections: [
      {
        heading: "규칙",
        body: "이름은 use 뒤에 대문자로 시작하고, 훅은 컴포넌트나 커스텀 훅의 맨 위에서만 부릅니다.",
      },
      {
        heading: "state는 따로",
        body: "같은 훅을 두 컴포넌트가 불러도 state는 각자 따로 가집니다. 나눠 쓰는 것은 state가 아니라 로직입니다.",
      },
    ],
    sources: [
      {
        name: "React 문서 — 커스텀 Hook으로 로직 재사용하기",
        url: "https://ko.react.dev/learn/reusing-logic-with-custom-hooks",
      },
    ],
  },
];

// 모든 글
export function getPosts(): Post[] {
  return posts;
}

// 주소의 slug에 맞는 글 하나 — 없으면 undefined
export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
