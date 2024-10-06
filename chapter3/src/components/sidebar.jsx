import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { BiMoviePlay } from 'react-icons/bi';

const Side = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0;
  height: 100vh;
  margin-top: 30px;
  width: 10%;
`;

const LinkedStyle = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 0;
`;

const StyledButton = styled.button`
  background-color: transparent; /* 버튼의 배경 투명하게 */
  border: none;
  padding: 10px;
  display: flex; /* flex로 설정 */
  justify-content: center; /* 가로 가운데 정렬 */
  align-items: center;
  margin-top: 5px;
  margin-bottom: 0;
  padding-left: 0;
`;

function Sidebar() {
  return (
    <Side>
      <StyledButton>
        <LinkedStyle to={'/search'}>
          <IoSearch style={{ margin: '8px' }} />
          찾기
        </LinkedStyle>
      </StyledButton>
      <StyledButton>
        <LinkedStyle to={'/movies'}>
          <BiMoviePlay style={{ margin: '8px' }} />
          영화
        </LinkedStyle>
      </StyledButton>
    </Side>
  );
}

export default Sidebar;
