import React from 'react';
import styled from 'styled-components';
import AppRouter from './layout/router';

const AppContainer = styled.div`
  min-height: 100vh; /* 최소 높이를 뷰포트 높이로 설정 */
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  );
}

export default App;
