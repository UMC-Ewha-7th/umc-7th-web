import styled from "styled-components";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../features/cart/cartSlice";

const CartItem = ({id, title, singer, price, img, amount}) =>{
    const dispatch = useDispatch();

    return(
        <ItemCard>
            <img src = {img} width={"100px"}/>
            <TextArea>
                <p>{title} | {singer}</p>
                <p className="price"> ₩ {price}</p>
            </TextArea>
            <CartAdd>
                <ButtonUp onClick={()=>dispatch(increase(id))}>
                    <GoChevronUp size={'25px'}/>
                </ButtonUp>
                <p> {amount} </p>
                <ButtonDown onClick={()=>{
                    if (amount === 1){
                        dispatch(removeItem(id));
                    }
                    dispatch(decrease(id));
                }}>
                    <GoChevronDown size={'25px'} />
                </ButtonDown>

            </CartAdd>
        </ItemCard>
    )

}

const ItemCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 10px;
`

const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    p{
        margin: 0px;
    }
    .price{
        color: grey;
    }

`
const CartAdd = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    p{
        margin: 0px;
    }
`

const ButtonUp = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
const ButtonDown = styled.button`
  border: 0;
  background-color: transparent;    
    cursor: pointer;
`


export default CartItem;