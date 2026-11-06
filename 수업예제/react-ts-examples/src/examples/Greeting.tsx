// props 타입 두 방식
// 매개변수 타입 지정 방식
interface GreetingProps {
  name: string;
}

export function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}!</h1>;
}

// 제네릭 방식
interface GreetingPropsGeneric {
  name: string;
}

export const GreetingGeneric: React.FC<GreetingPropsGeneric> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
