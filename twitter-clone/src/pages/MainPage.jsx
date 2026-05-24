// 메인 화면 - 내비게이션, 피드, 위젯 합쳐서 보여주는 파일
import MainFeed from "../components/MainFeed";
import NavBar from "../components/NavBar";
import Widgets from "../components/Widgets";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: max-content;
`;

function MainPage() {
  return (
    <MainContainer>
      <NavBar />
      <MainFeed />
      <Widgets />
    </MainContainer>
  );
}

export default MainPage;
