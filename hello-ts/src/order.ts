// 카페 주문 (union · interface · 선택 속성 · 함수 타입)
// 정해진 값 가운데 하나만 — union 타입
type Size = "S" | "M" | "L";
type Status = "접수" | "제조 중" | "완료";

// 메뉴와 주문의 모양 — interface
interface Menu {
  name: string;
  price: number;
}

interface Order {
  id: number;
  menu: Menu;
  size: Size;
  status: Status;
  shot?: number; // 샷 추가 — 없는 주문도 있음
  memo?: string; // 요청 사항 — 없는 주문도 있음
}

const americano: Menu = { name: "아메리카노", price: 4000 };
const latte: Menu = { name: "카페라테", price: 4500 };
const greenTea: Menu = { name: "녹차", price: 4200 };

const orders: Order[] = [
  { id: 1, menu: americano, size: "M", status: "접수", shot: 1,
    memo: "얼음 적게" },
  { id: 2, menu: latte, size: "L", status: "제조 중" },
  { id: 3, menu: greenTea, size: "S", status: "완료", memo: "따뜻하게" },
];

// 크기마다 더하는 값 — Size의 세 값만 들어옴
function sizeExtra(size: Size): number {
  if (size === "L") return 1000;
  if (size === "M") return 500;
  return 0;
}

// 주문 하나의 값 — 샷은 하나에 500원, 없으면 0
function priceOf(order: Order): number {
  const shot = order.shot || 0;
  return order.menu.price + sizeExtra(order.size) + shot * 500;
}

// 함수 타입 — 값을 받아 할인한 값을 돌려주는 규칙
type Discount = (price: number) => number;
const member: Discount = (price) => price * 0.9;
const none: Discount = (price) => price;

// 주문서 출력 — 할인 규칙을 함수로 받고, 돌려주는 값은 없음
function printReceipt(list: Order[], discount: Discount): void {
  let sum = 0;
  list.forEach((order) => {
    const price = priceOf(order);
    sum += price;
    const name = `${order.menu.name} ${order.size}`;
    console.log(`${order.id}. ${name} ${price}원 [${order.status}]`);
    if (order.memo) {
      console.log(`   요청 : ${order.memo}`);
    }
  });
  console.log(`합계 ${sum}원 → 할인 후 ${discount(sum)}원`);
}

console.log("[오늘 주문 — 회원 10% 할인]");
printReceipt(orders, member);
console.log("[남은 주문 — 할인 없음]");
printReceipt(orders.filter((order) => order.status !== "완료"), none);

// 상태만 바꾼 새 주문 — 원래 주문은 그대로
function changeStatus(order: Order, status: Status): Order {
  return { ...order, status };
}

const second = orders.find((order) => order.id === 2);
if (second) {
  const done = changeStatus(second, "완료");
  const before = second.status;
  console.log(`${done.id}번 ${done.menu.name} : ${before} → ${done.status}`);
}
