import { useEffect, useState } from "react";
import { Link } from "react-router";

const API = "https://jsonplaceholder.typicode.com";

function UsersPage() {
  const [users, setUsers] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(`${API}/users`);
        if (!response.ok) throw new Error(`작성자를 받지 못했습니다 (${response.status})`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setMessage(error.message);
      }
    }
    loadUsers();
  }, []); // 처음 그린 뒤 한 번

  if (message) return <p className="notice">{message}</p>;
  if (!users) return <p>불러오는 중…</p>;

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
