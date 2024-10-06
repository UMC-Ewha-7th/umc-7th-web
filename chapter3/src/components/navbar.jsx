import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const YONGCHA = styled.h3`
  padding: 0px;
  height: 35px;
  margin-left: 20px;
`;
const NavButton = styled.button`
  border-radius: 5px;
  border: 1px solid white;
  padding: 5px;
  background-color: ${(props) => props.color};
  &:hover {
    background-color: hsl(
      216.22641509433961,
      76.81159420289853%,
      59.411764705882355%
    );
  }
`;
const AllButton = styled.div`
  display: flex;
  gap: 10px;
  padding: 0;
  margin-right: 20px;
`;

const Bar = styled.nav`
  display: flex;
  height: 35px;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  left: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color};
`;

function Navbar() {
  return (
    <Bar>
      <YONGCHA>
        <StyledLink color={'red'} to={'/'}>
          YONGCHA
        </StyledLink>
      </YONGCHA>
      <AllButton>
        <NavButton color={'#ee51b2'}>
          <StyledLink color={'white'} to={'/login'}>
            로그인
          </StyledLink>
        </NavButton>
        <NavButton color={'pink'}>
          <StyledLink color={'white'} to={'/signup'}>
            회원가입
          </StyledLink>
        </NavButton>
      </AllButton>
    </Bar>
  );
}

export default Navbar;
