// 리터럴 타입 — 정해진 값 몇 개만
let size1 = "M"; // string으로 추론
const size2 = "M"; // "M"으로 추론 — const는 바뀌지 않으니
type Size = "S" | "M" | "L";
let mySize: Size = "M";
mySize = "XL"; // 오류 — Size에 없는 값
console.log(size1, size2, mySize);
