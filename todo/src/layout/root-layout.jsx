import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const MainContent = styled.div`
  flex-grow: 1; /* 남은 공간을 모두 차지 */
  padding: 20px; /* 여백을 추가하여 컨텐츠가 화면에 붙지 않도록 */
  margin-top: 25px; /* Navbar 아래로 공간 */
  /* justify-content: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function RootLayout() {
  return (
    <div>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
}

export default RootLayout;
