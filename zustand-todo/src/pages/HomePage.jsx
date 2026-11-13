import { Link } from "react-router";

// 첫 페이지(/) — 로그인했는지에 따라 안내가 다릅니다
function HomePage({ user }) {
  return (
    <main className="todo-app">
      <h1>할 일 노트</h1>
      {user ? (
        <p>
          {user}님, 반갑습니다. <Link to="/todos">내 할 일 보기</Link>
        </p>
      ) : (
        <p>
          로그인하면 내 할 일을 볼 수 있습니다. <Link to="/login">로그인하기</Link>
        </p>
      )}
    </main>
  );
}

export default HomePage;
