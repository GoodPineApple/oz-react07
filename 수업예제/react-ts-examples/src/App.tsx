import Card from "./examples/Card.tsx";
import { Greeting, GreetingGeneric } from "./examples/Greeting.tsx";
import { firstNumber, firstString } from "./examples/getFirstItem.ts";
import Button from "./examples/Button.tsx";
import UserList from "./examples/UserList.tsx";
import UserCard from "./examples/UserCard.tsx";
import Counter from "./examples/Counter.tsx";
import UserForm from "./examples/UserForm.tsx";
import TodoList from "./examples/TodoList.tsx";
import TodoApp from "./examples/TodoApp.tsx";
import EventDemo from "./examples/EventDemo.tsx";
import RefDemo from "./examples/RefDemo.tsx";
import StatusDemo from "./examples/StatusDemo.tsx";

const users = [
  { name: "민지", age: 24 },
  { name: "도윤", age: 31 },
];

// 수업예제 — 장표의 코드를 한 화면에서 돌려 봄
function App() {
  return (
    <main className="examples">
      <Card title="props 타입 두 방식">
        <Greeting name="민지" />
        <GreetingGeneric name="도윤" />
      </Card>
      <Card title="제네릭">
        <p>{firstString} · {firstNumber}</p>
      </Card>
      <Card title="함수 props">
        <Button label="저장" onClick={(value) => console.log(value)} />
        <Button label="취소" size="large" onClick={(value) => console.log(value)} />
      </Card>
      <Card title="객체 · 배열 props">
        <UserList users={users} />
        <UserCard user={users[0]} onSelect={(user) => console.log(user.name)} />
      </Card>
      <Card title="state">
        <Counter />
        <UserForm />
        <TodoList />
      </Card>
      <Card title="fetch">
        <TodoApp />
      </Card>
      <Card title="이벤트 타입">
        <EventDemo />
      </Card>
      <Card title="useRef">
        <RefDemo />
      </Card>
      <Card title="union state">
        <StatusDemo />
      </Card>
    </main>
  );
}

export default App;
