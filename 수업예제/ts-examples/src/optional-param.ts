// 선택 매개변수 — 없어도 되는 값은 ?
function greet(name: string, title?: string): string {
  if (title) {
    return `${title} ${name}님`;
  }
  return `${name}님`;
}
console.log(greet("민지")); // 민지님
console.log(greet("민지", "팀장")); // 팀장 민지님
console.log(greet()); // 오류 — name이 없음
