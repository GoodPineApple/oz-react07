// type은 객체가 아닌 것에도 이름을 붙임 — interface는 객체 모양만
type ID = number | string;
type Price = number;
const memberId: ID = "m-001";
const coffee: Price = 4500;
console.log(memberId, coffee);
