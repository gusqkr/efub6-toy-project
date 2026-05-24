import styled from "styled-components";
import FeedHeader from "./FeedHeader";
import PostingSection from "./PostingSection";
import PostList from "./PostList";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border: solid 1px #9a9a9a;
  padding: 0;
`;
function MainFeed() {
  return (
    <FeedContainer>
      <FeedHeader />
      <PostingSection />
      <PostList />
    </FeedContainer>
  );
}

export default MainFeed;
