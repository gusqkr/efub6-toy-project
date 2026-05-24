import styled from "styled-components";
import PostCard from "./PostCard";

import React from "react";
import { useSelector } from "react-redux";

const PostList = ({ onCardClick }) => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onCardClick={onCardClick} />
      ))}
    </>
  );
};

export default PostList;
