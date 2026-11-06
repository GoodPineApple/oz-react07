// union — 숫자일 수도, 글자일 수도 있는 주문 번호
function label(code: number | string): string {
  if (typeof code === "string") {
    return code.toUpperCase(); // 여기서 code는 string
  }
  return `#${code}`; // 여기서 code는 number
}
console.log(label("a-12"), label(7));
