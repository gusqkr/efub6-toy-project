import styled from "styled-components";
import FeedHeader from "./FeedHeader";
import PostingSection from "./PostingSection";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border: solid 1px #9a9a9a;
  padding: 10px 0px;
`;
function MainFeed() {
  return (
    <FeedContainer>
      <FeedHeader />
      <PostingSection />
    </FeedContainer>
  );
}

export default MainFeed;
