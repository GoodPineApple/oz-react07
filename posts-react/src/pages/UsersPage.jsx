import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

  if (message) return <p className="text-destructive">{message}</p>;
  if (!users) return <p className="text-muted-foreground">불러오는 중…</p>;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">작성자</h1>
        <Badge variant="secondary">{users.length}명</Badge>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/posts?userId=${user.id}`} className="block">
              <Card size="sm" className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UsersPage;
