// 객체/배열 Props
interface User {
  name: string;
  age: number;
}

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.name}>
          {user.name} - {user.age}
        </li>
      ))}
    </ul>
  );
}
