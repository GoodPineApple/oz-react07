// any와 unknown
let anything: any = 42;
anything = "Hello"; // 에러 없음
let mystery: unknown = 42;
if (typeof mystery === "string") {
  mystery.toString(); // 안전
}
