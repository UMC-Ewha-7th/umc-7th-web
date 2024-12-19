import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import CartItem from './CartItem';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
    const {amount, cartItems, total} = useSelector((store)=> store.cart);
    console.log(cartItems);
    const dispatch = useDispatch();

    return(
        <Container>
            <h2>당신이 선택한 음반</h2>

            <Items>
                {cartItems.map((item) =>{
                    return <CartItem key={item.id} {...item}/>
                })}
            </Items>

            <HR/>
            
            <Total>
                <h3> 총 가격 </h3>
                <h3> ₩{total}원 </h3>
            </Total>

            <ClearCart onClick={()=>{
                dispatch(openModal());
            }}>장바구니 초기화</ClearCart>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: "Gothic A1", serif;
    font-weight: 600;
    font-style: normal;
`

const Items = styled.div`
    width: 80%;
`

const HR = styled.div`
    width: 80%;
    border-bottom: 1px solid #aaa;
    lineHeight: 0.1em;
    margin-top: 40px;
`

const Total = styled.div`
    width: 80%;
    display: flex;
    gap: 50px;
    justify-content: space-between;
`

const ClearCart = styled.button`
    background-color: white;
    stroke: blue;
    padding: 10px;
    border-radius: 1em;
    cursor: pointer;
    
    &:hover{
        background-color: #BBBBBB;
    }
    
`


export default CartContainer;