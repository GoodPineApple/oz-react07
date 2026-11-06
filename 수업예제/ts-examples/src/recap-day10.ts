// DAY 10 51장 — 입력칸에서 받은 값은 문자열
const price = "12000";
const shipping = 3000;
console.log(price + shipping); // 120003000 — 글자 잇기는 TypeScript도 막지 않음

// 받을 값이 숫자라고 적어 두면
function total(itemPrice: number, fee: number): number {
  return itemPrice + fee;
}
console.log(total(price, shipping)); // 오류 — 글자를 숫자 자리에
console.log(total(Number(price), shipping)); // 15000
