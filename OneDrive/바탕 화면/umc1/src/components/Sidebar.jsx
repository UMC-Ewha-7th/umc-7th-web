import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFilm, FaSearch } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #333;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarItem = styled(Link)`
  color: white;
  padding: 1rem;
  text-decoration: none;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #555;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarItem to="/search"><FaSearch /> 찾기</SidebarItem>
      <SidebarItem to="/movies"><FaFilm /> 영화</SidebarItem>
    </SidebarContainer>
  );
}

export default Sidebar;