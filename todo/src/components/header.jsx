import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title onClick={() => navigate('/')}>예린이의 ToDoList</Title>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 25%;
  background-color: #b9eaf6;
  padding: 70px 0;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 35px;
`;

export default Header;
