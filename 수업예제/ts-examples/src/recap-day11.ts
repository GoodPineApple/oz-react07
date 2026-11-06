// DAY 11 45장 — 숫자와 숫자처럼 보이는 문자열
console.log("10" < 9); // 오류 — 글자와 숫자를 크기 비교

const input = "2";
switch (input) {
  case 2: // 오류 — "2"와 2는 같을 수 없음
    console.log("2번 메뉴");
    break;
  default:
    console.log("없는 메뉴");
}
