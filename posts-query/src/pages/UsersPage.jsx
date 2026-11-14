import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const API = "https://jsonplaceholder.typicode.com";

// 작성자 목록을 받아 오는 함수
async function fetchUsers() {
  const response = await fetch(`${API}/users`);
  if (!response.ok) throw new Error(`작성자를 받지 못했습니다 (${response.status})`);
  return response.json();
}

function UsersPage() {
  const { data: users, isPending, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isPending) return <p>불러오는 중…</p>;
  if (error) return <p className="notice">{error.message}</p>;

  return (
    <section>
      <h1>작성자 ({users.length}명)</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/posts?userId=${user.id}`}>{user.name}</Link>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UsersPage;
