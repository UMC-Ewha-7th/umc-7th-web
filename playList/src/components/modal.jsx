import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

function Modal() {
  const dispatch = useDispatch();

  return (
    <Dialog>
      <Alert>정말 초기화하시겠습니까?</Alert>
      <Buttons>
        <No onClick={() => dispatch(closeModal())}>아니오</No>
        <Yes
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          네
        </Yes>
      </Buttons>
    </Dialog>
  );
}

const Buttons = styled.div`
  display: flex;
  column-gap: 20px;
  position: absolute;
  top: 232px;
  left: 179px;
`;

const No = styled.button`
  width: 130px;
  height: 54px;
  background-color: #f2f2f2;
  border-radius: 10px;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4f4f4f;
  border: 0;
`;

const Yes = styled.button`
  color: white;
  width: 130px;
  height: 54px;
  background-color: #41c3ab;
  border-radius: 10px;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
`;

const Alert = styled.div`
  position: absolute;
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  top: 122px;
  left: 150px;
`;

const Dialog = styled.div`
  position: relative;
  width: 637px;
  height: 350px;
  border-radius: 50px;
  background-color: white;
  border: 0;
  top: 50%; /* 화면 세로 중앙 */
  left: 50%; /* 화면 가로 중앙 */
  transform: translate(-50%, -1100px);
  ::backdrop {
    background-color: #0000008c;
  }
`;

export default Modal;
