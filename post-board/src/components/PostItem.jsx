import { memo } from "react";

// 글 한 줄 — ★ 버튼과 제목 버튼
function PostItem({ post, selected, liked, onSelect, onToggleLike }) {
  console.log("PostItem 그림", post.id); // 몇 번 그리는지 세어 보기

  return (
    <li>
      <button className="like" onClick={() => onToggleLike(post.id)}>
        {liked ? "★" : "☆"}
      </button>
      <button
        className={selected ? "title selected" : "title"}
        onClick={() => onSelect(post.id)}
      >
        {post.id}. {post.title}
      </button>
    </li>
  );
}

// props가 그대로면 다시 그리지 않음
export default memo(PostItem);
