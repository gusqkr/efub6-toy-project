import styled from "styled-components";
import ProfileSection from "./ProfileSection";
import ProfilePost from "./ProfilePost";
const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  padding: 0;
  border-left: solid 1px #9a9a9a;
  border-right: solid 1px #9a9a9a;
  height: 100vh;
  background-color: black;
`;

const ProfileFeed = () => {
  return (
    <FeedContainer>
      <ProfileSection />
      <ProfilePost />
    </FeedContainer>
  );
};
export default ProfileFeed;
