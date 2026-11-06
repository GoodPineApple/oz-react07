// 함수의 매개변수 · 반환값 타입
function getUserInfo(user: { name: string; age: number }): string[] {
  return [user.name, String(user.age)];
}
let result = getUserInfo({ name: "Charlie", age: 28 });
