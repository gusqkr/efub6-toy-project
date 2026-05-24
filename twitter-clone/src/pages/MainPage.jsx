// 메인 화면 - 내비게이션, 피드, 위젯 합쳐서 보여주는 파일
import MainFeed from "../components/MainFeed";
import NavBar from "../components/NavBar";
import Widgets from "../components/Widgets";
import styled from "styled-components";
import React, { useState } from "react";
import ProfileFeed from "../components/ProfileFeed";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 100vh;
  box-sizing: border-box;
`;

function MainPage() {
  const [isMain, setIsMain] = useState(true);
  return (
    <MainContainer>
      <NavBar onChangeFeed={setIsMain} />
      {isMain ? <MainFeed /> : <ProfileFeed />}

      <Widgets />
    </MainContainer>
  );
}

export default MainPage;
