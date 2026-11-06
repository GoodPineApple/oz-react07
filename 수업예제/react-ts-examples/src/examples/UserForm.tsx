// 객체 state (import React 줄을 빼고 export를 더함)
import { useState } from "react";

interface UserState {
  name: string;
  age: number;
}

export default function UserForm() {
  const [user, setUser] = useState<UserState>({ name: "", age: 0 });

  return (
    <div>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: parseInt(e.target.value) })}
      />
      <p>{user.name} · {user.age}</p>
    </div>
  );
}
