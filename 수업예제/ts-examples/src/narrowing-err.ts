// typeof로 확인하지 않고 바로 쓰면
function label(code: number | string): string {
  return code.toUpperCase();
}
console.log(label("a-12"));
