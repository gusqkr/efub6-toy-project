import styled from "styled-components";
import PostCard from "./PostCard";

import React from "react";
import { useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      {posts && posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <div>아직 작성된 트윗이 없습니다.</div>
      )}
    </>
  );
};

export default PostList;
