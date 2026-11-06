// 객체 타입 — 빠진 속성 · 없는 속성
type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  checked: boolean;
};
const pen: CartItem = { id: 5, name: "볼펜", price: 1000, checked: true };
const cup: CartItem = { id: 6, name: "컵", price: 3000, qty: 1, checked: true, color: "흰색" };
console.log(pen, cup);
