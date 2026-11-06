// interface와 type
interface User {
  name: string;
  age: number;
}
type UserType = {
  name: string;
  age: number;
};
let user1: User = { name: "Alice", age: 25 };
let user2: UserType = { name: "Bob", age: 30 };
