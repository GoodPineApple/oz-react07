import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <Routes>
      {/* 모든 페이지가 Layout(머리말 · 꼬리말) 안에 그려집니다 */}
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
