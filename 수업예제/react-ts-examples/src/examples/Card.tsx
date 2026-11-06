// children — 여는 태그와 닫는 태그 사이에 넣은 것. 무엇이든 그릴 수 있는 것은 React.ReactNode
interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <section className="card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
