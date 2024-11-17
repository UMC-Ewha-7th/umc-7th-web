import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  color: white;
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

const Name = styled.div`
  color: white;
  font-weight: bold;
  font-size: medium;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color};
`;

function Navbar() {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);
  const [nickname, setNickname] = useState('');
  const accessToken = localStorage.getItem('accessToken');

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/user/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const nickname = response.data.email.split('@', 1);
      setNickname(nickname);
    } catch (error) {
      console.error('회원 정보 반환 에러', error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      setAuthorized(true);
      getUser();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAuthorized(false);
    navigate('/');
  };

  return (
    <Bar>
      <YONGCHA>
        <StyledLink color={'red'} to={'/'}>
          YONGCHA
        </StyledLink>
      </YONGCHA>
      {authorized ? (
        <AllButton>
          <Name>{nickname}님 반갑습니다.</Name>
          <NavButton color={'#ee51b2'} onClick={handleLogout}>
            로그아웃
          </NavButton>
        </AllButton>
      ) : (
        <AllButton>
          <NavButton
            color={'#ee51b2'}
            onClick={() => (
              navigate('/login'),
              {
                replace: false,
              }
            )}
          >
            로그인
          </NavButton>
          <NavButton color={'pink'}>
            <StyledLink color={'white'} to={'/signup'}>
              회원가입
            </StyledLink>
          </NavButton>
        </AllButton>
      )}
    </Bar>
  );
}

export default Navbar;
