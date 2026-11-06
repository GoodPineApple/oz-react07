// Props 예시 : 모델은 model/User에 (import React 줄을 빼고, import type으로, export를 더함)
import type { User } from "./model/User";

interface UserCardProps {
  user: User;
  onSelect: (user: User) => void;
}

export default function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <div onClick={() => onSelect(user)}>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
}
