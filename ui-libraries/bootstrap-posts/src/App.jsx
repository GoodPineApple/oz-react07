import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, Button, Card, Col, Container, Navbar, Row } from "react-bootstrap";

const API = "https://jsonplaceholder.typicode.com";
const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// React Bootstrap — DAY 08의 Bootstrap을 컴포넌트로
function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("userId"); // ?userId=3이면 "3", 없으면 null
  const [posts, setPosts] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadPosts() {
      const url = userId ? `${API}/posts?userId=${userId}` : `${API}/posts`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`글 목록을 받지 못했습니다 (${response.status})`);
        setPosts(await response.json());
        setMessage("");
      } catch (error) {
        setMessage(error.message);
      }
    }
    loadPosts();
  }, [userId]); // DAY 31과 같은 코드 — 모양만 라이브러리로

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>JSONPlaceholder 게시판</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="py-4">
        {message && <p className="text-danger">{message}</p>}
        {!posts && !message && <p>불러오는 중…</p>}
        {posts && (
          <>
            <h1 className="h4">
              글 목록 <Badge bg="secondary">{posts.length}개</Badge>
            </h1>
            <div className="d-flex flex-wrap gap-1 my-3">
              <Button size="sm" variant={userId ? "outline-primary" : "primary"} onClick={() => setSearchParams({})}>
                전체
              </Button>
              {userIds.map((n) => (
                <Button
                  key={n}
                  size="sm"
                  variant={Number(userId) === n ? "primary" : "outline-primary"}
                  onClick={() => setSearchParams({ userId: n })}
                >
                  {n}
                </Button>
              ))}
            </div>
            <Row xs={1} sm={2} lg={3} className="g-3">
              {posts.map((post) => (
                <Col key={post.id}>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Subtitle className="mb-2 text-muted small">
                        {post.id}번 글 · 작성자 {post.userId}번
                      </Card.Subtitle>
                      <Card.Title className="fs-6">{post.title}</Card.Title>
                      <Card.Text className="text-muted small text-truncate">{post.body}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </>
  );
}

export default App;
