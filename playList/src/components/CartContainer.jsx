import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

function CartContainer() {
  const { cartItems, total } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  return (
    <section>
      <Header>
        <Title>내가 선택한 음반</Title>
      </Header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <Line />
      <Total>
        <h3>총 가격</h3>
        <h3>\ {total}원</h3>
      </Total>
      <ButtonContainer>
        <Button onClick={() => dispatch(openModal())}>장바구니 초기화</Button>
      </ButtonContainer>
    </section>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: skyblue;
  color: white;
  font-size: 15px;
  padding: 13px;
  border: 0;
  border-radius: 8px;
  width: 200px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid black;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export default CartContainer;
