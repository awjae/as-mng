// components/Board.tsx

import React, { useState } from "react";

const Board: React.FC = () => {
  const [posts, setPosts] = useState<string[]>([]);
  const [newPost, setNewPost] = useState<string>("");

  const handleNewPostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPost(e.target.value);
  };

  const handleNewPostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPost.trim() !== "") {
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setNewPost("");
    }
  };

  return (
    <div>
      <h1>게시판</h1>
      <form onSubmit={handleNewPostSubmit}>
        <input
          type="text"
          placeholder="새로운 게시글 작성"
          value={newPost}
          onChange={handleNewPostChange}
        />
        <button type="submit">작성</button>
      </form>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default Board;