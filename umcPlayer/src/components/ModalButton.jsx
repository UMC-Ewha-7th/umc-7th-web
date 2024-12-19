import { useDispatch, useSelector } from "react-redux";
import {clearCart} from "../features/cart/cartSlice"
import styled from "styled-components";
import { closeModal } from "../features/modal/modalSlice";

const ModalButton = () => {
    const dispatch = useDispatch();
    return(
        <ModalArea>
            <YesBtn onClick={()=>{
                dispatch(clearCart());
                dispatch(closeModal());
            }}>네</YesBtn>
            <NoBtn onClick={() => {
                dispatch(closeModal());
            }}>아니오</NoBtn>
        </ModalArea>
    )
}

const ModalArea = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    width: 100%;
`
const YesBtn = styled.button`
    background-color: white;
    width: 75px;
    height: 2.5em;
    border-color: rgb(229, 65, 65);
    border-radius: 1em;
    cursor: pointer;
    
    &:hover{
        background-color: rgba(229, 65, 65, 0.5);
    }
`

const NoBtn = styled.button`
    background-color: white;
    width: 75px;
    height: 2.5em;
    border-color: rgb(77, 99, 195);
    border-radius: 1em;
    cursor: pointer;
    
    &:hover{
        background-color: rgba(77, 99, 195, 0.5);
    }
`

export default ModalButton;