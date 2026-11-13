import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Button, Card, Col, Flex, Layout, Row, Tag, Typography } from "antd";

const API = "https://jsonplaceholder.typicode.com";
const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const { Header, Content } = Layout;

// Ant Design — 업무용(관리자) 화면에 쓰는 컴포넌트
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
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Typography.Text strong style={{ color: "#fff", fontSize: 16 }}>JSONPlaceholder 게시판</Typography.Text>
      </Header>
      <Content style={{ padding: 24 }}>
        {message && <Typography.Text type="danger">{message}</Typography.Text>}
        {!posts && !message && <Typography.Text>불러오는 중…</Typography.Text>}
        {posts && (
          <>
            <Flex align="center" gap={8}>
              <Typography.Title level={4} style={{ margin: 0 }}>글 목록</Typography.Title>
              <Tag>{posts.length}개</Tag>
            </Flex>
            <Flex wrap gap={4} style={{ margin: "16px 0" }}>
              <Button size="small" type={userId ? "default" : "primary"} onClick={() => setSearchParams({})}>
                전체
              </Button>
              {userIds.map((n) => (
                <Button
                  key={n}
                  size="small"
                  type={Number(userId) === n ? "primary" : "default"}
                  onClick={() => setSearchParams({ userId: n })}
                >
                  {n}
                </Button>
              ))}
            </Flex>
            <Row gutter={[12, 12]}>
              {posts.map((post) => (
                <Col key={post.id} xs={24} sm={12} lg={8}>
                  <Card size="small" title={post.title} hoverable style={{ height: "100%" }}>
                    <Typography.Text type="secondary">
                      {post.id}번 글 · 작성자 {post.userId}번
                    </Typography.Text>
                    <Typography.Paragraph ellipsis={{ rows: 2 }} style={{ margin: 0 }}>
                      {post.body}
                    </Typography.Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Content>
    </Layout>
  );
}

export default App;
