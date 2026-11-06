// 받을 모양을 적어 두면 — 오타를 실행 전에 찾음
type Cafe = {
  cafe: string;
  menu: { name: string; price: number }[];
};
const response = '{"cafe":"오즈 카페","menu":[{"name":"아메리카노","price":3000}]}';
const data: Cafe = JSON.parse(response);
console.log(data.menuu.length); // 오류 — menu의 오타
