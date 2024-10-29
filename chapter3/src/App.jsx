import React from 'react';
import Router from './layout/router';
import styled, { createGlobalStyle } from 'styled-components';

// 전역 스타일을 설정하기 위한 글로벌 스타일 정의
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background-color: black;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
`;

// App 전체를 감싸는 컨테이너 스타일 정의
const AppContainer = styled.div`
  min-height: 100vh; /* 최소 높이를 뷰포트 높이로 설정 */
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Router />
      </AppContainer>
    </>
  );
}

export default App;
