import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import {
  AppBar, Button, Card, CardActionArea, CardContent,
  Chip, Container, Grid, Stack, Toolbar, Typography,
} from "@mui/material";

const API = "https://jsonplaceholder.typicode.com";
const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// MUI(Material UI) — 구글 머티리얼 디자인 컴포넌트
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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">JSONPlaceholder 게시판</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 3 }}>
        {message && <Typography color="error">{message}</Typography>}
        {!posts && !message && <Typography>불러오는 중…</Typography>}
        {posts && (
          <>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 2 }}>
              <Typography variant="h5">글 목록</Typography>
              <Chip label={`${posts.length}개`} size="small" />
            </Stack>
            <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 0.5, mb: 2 }}>
              <Button size="small" variant={userId ? "outlined" : "contained"} onClick={() => setSearchParams({})}>
                전체
              </Button>
              {userIds.map((n) => (
                <Button
                  key={n}
                  size="small"
                  variant={Number(userId) === n ? "contained" : "outlined"}
                  onClick={() => setSearchParams({ userId: n })}
                >
                  {n}
                </Button>
              ))}
            </Stack>
            <Grid container spacing={2}>
              {posts.map((post) => (
                <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card sx={{ height: "100%" }}>
                    <CardActionArea sx={{ height: "100%" }}>
                      <CardContent>
                        <Typography variant="caption" color="text.secondary">
                          {post.id}번 글 · 작성자 {post.userId}번
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{post.title}</Typography>
                        <Typography variant="body2" color="text.secondary" noWrap>{post.body}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}

export default App;
