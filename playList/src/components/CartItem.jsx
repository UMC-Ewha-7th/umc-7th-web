import React from 'react';
import styled from 'styled-components';
import { ChevronDown, ChevronUp } from '../constants/icons';
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../features/cart/cartSlice';

function CartItem({ id, img, title, singer, price, amount }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <New>
        <Img src={img} alt="poster" />
        <BoxContainer>
          <Box>
            <Title>{title}</Title>
            <span> | </span>
            <Singer>{singer}</Singer>
          </Box>
          <Price>\{price}</Price>
        </BoxContainer>
      </New>
      <AmountContainer>
        <ChevronUp onClick={() => dispatch(increase(id))} />
        <Title>{amount}</Title>
        <ChevronDown
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        />
      </AmountContainer>
    </Container>
  );
}

const New = styled.div`
  display: flex;
  column-gap: 20px;
`;

const Container = styled.div`
  display: flex;
  width: 900px;
  height: 70px;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;
`;

const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  align-items: center;
  justify-content: end;
`;

const Price = styled.div`
  color: gray;
  font-size: 20px;
`;

const Box = styled.div`
  display: flex;
  column-gap: 10px;
  overflow: auto;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Singer = styled.div`
  font-size: 20px;
`;

const Img = styled.img`
  width: 70px;
  height: 80px;
`;

export default CartItem;
