import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">YONGCHA</Logo>
      <ButtonGroup>
        <NavButton to="/login">로그인</NavButton>
        <NavButton to="/signup">회원가입</NavButton>
      </ButtonGroup>
    </Nav>
  );
};

export default Navbar;

// Styled components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;

  &:hover {
    color: #f39c12;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavButton = styled(Link)`
  background-color: #f39c12;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    background-color: #d35400;
  }
`;