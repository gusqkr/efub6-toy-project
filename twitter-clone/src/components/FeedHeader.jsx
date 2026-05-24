import styled from "styled-components";
import { FiSettings } from "react-icons/fi";

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 5px;
  padding-bottom: 10px;
  border-bottom: solid 1px #9a9a9a;
  align-items: center;
`;

const HeaderLeftText = styled.p`
  color: white;
  flex: 5;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -11px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 4px;
    background-color: #32c5ff;
    border-radius: 20px;
  }
`;
const HeaderRightText = styled.p`
  color: gray;
  flex: 4;
  font-size: 15px;
`;

const SettingIcon = styled(FiSettings)`
  color: white;
  flex: 1;
  padding-top: 5px;
  font-size: 15px;
`;

const FeedHeader = () => {
  return (
    <HeaderContainer>
      <HeaderLeftText>For you</HeaderLeftText>
      <HeaderRightText>Following</HeaderRightText>
      <SettingIcon />
    </HeaderContainer>
  );
};

export default FeedHeader;
