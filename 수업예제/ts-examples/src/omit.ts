// Omit 유틸리티
interface User {
  name: string;
  age: number;
  password: string;
}
interface PublicUser extends Omit<User, "password"> {}
type PublicUserType = Omit<User, "password">;
let user1: PublicUser = { name: "Ivy", age: 25 };
let user2: PublicUserType = { name: "Jack", age: 30 };
