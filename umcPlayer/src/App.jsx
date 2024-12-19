import './App.css'
import styled from "styled-components";
import CartContainer from './components/cartContainer';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/cartSlice';
import ModalPortal from './components/ModalPortal';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((store)=>store.cart);
  const {isOpen} = useSelector((store)=>store.modal)

  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems, dispatch])
  return (
    <Container>
      <Navbar/>
      <CartContainer />

      {isOpen&&
        <ModalPortal>
          <Modal>
            <h4>담아두신 모든 음반을 삭제하시겠습니까?</h4>
          </Modal>
        </ModalPortal>
      }


    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

export default App
