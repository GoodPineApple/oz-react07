// useState 기본 타입 (import React 줄을 빼고 export를 더함)
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
