// 함수 타입 — 숫자를 받아 글자를 돌려주는 함수
type Formatter = (price: number) => string;
const plain: Formatter = (price) => `${price}원`;
const thousand: Formatter = (price) => `${price / 1000}천 원`;

// 함수를 받는 함수 — 어떤 모양으로 쓸지 넘겨받음
function printPrice(price: number, format: Formatter): void {
  console.log(format(price));
}
printPrice(4500, plain); // 4500원
printPrice(4500, thousand); // 4.5천 원
