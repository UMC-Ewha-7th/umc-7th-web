import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import ModalPortal from './components/ModalPortal';
import Modal from './components/modal';
import { useStore } from 'zustand';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  //  const isOpen = useStore((state) => state.isOpen);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  return (
    <Container>
      <Navbar />
      <CartContainer />
      {isOpen && (
        <ModalPortal>
          <Modal />
        </ModalPortal>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default App;
