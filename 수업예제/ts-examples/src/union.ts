// type은 유니온
interface User {
  name: string;
  age: number;
}
type UserType = { name: string; age: number } | { name: string; age: null };
let user1: User = { name: "Charlie", age: 28 }; // age는 number 필수
let user2: UserType = { name: "Dave", age: null }; // age는 null 가능
