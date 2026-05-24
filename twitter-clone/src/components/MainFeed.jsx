import styled from "styled-components";
import FeedHeader from "./FeedHeader";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border: solid 1px #9a9a9a;
  padding: 10px;
`;
function MainFeed() {
  return (
    <FeedContainer>
      <FeedHeader />
    </FeedContainer>
  );
}

export default MainFeed;
