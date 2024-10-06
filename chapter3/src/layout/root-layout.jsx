import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  height: auto;
`;

const MainContent = styled.div`
  flex-grow: 1; /* 남은 공간을 모두 차지 */
  padding: 20px; /* 여백을 추가하여 컨텐츠가 화면에 붙지 않도록 */
  margin-top: 35px; /* Navbar 아래로 공간 */
`;

function RootLayout() {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Sidebar />
        <MainContent>
          <Outlet />
        </MainContent>
      </LayoutContainer>
    </>
  );
}

export default RootLayout;
