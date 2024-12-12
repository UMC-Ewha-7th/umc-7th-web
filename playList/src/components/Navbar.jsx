import React from 'react';
import { CartIcon } from '../constants/icons';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Navbar() {
  const { amount } = useSelector((state) => state.cart);
  return (
    <Container>
      <h1>PLAYLIST</h1>
      <AmountBox>
        <CartIcon />
        <Amount>{amount}</Amount>
      </AmountBox>
    </Container>
  );
}

const AmountBox = styled.div`
  display: flex;
`;

const Amount = styled.div`
  border: 0;
  border-radius: 100%;
  background-color: #4cb0f3;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-20px);
`;

const Container = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-around;
  color: white;
  background-color: skyblue;
  margin: 0;
  align-items: center;
`;

export default Navbar;
