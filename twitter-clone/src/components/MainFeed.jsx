import styled from "styled-components";
import FeedHeader from "./FeedHeader";
import PostingSection from "./PostingSection";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import ProfileFeed from "./ProfileFeed";

import React, { useState } from "react";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  padding: 0;
  border-left: solid 1px #9a9a9a;
  border-right: solid 1px #9a9a9a;
  height: 100vh;
`;
function MainFeed() {
  const [selectedPostID, setSelectedPostId] = useState(null);

  return (
    <FeedContainer>
      {selectedPostID === null ? (
        <>
          <FeedHeader />
          <PostingSection />
          <PostList onCardClick={setSelectedPostId} />
        </>
      ) : (
        <PostDetail
          postId={selectedPostID}
          onBack={() => setSelectedPostId(null)}
        />
      )}
    </FeedContainer>
  );
}

export default MainFeed;
