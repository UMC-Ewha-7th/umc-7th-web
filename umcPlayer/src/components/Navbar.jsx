import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = () => {
    const {amount} = useSelector((state)=>state.cart);

    return(
        <Header>
            <h1>UMC Playlist</h1>
            <CartIcon>
                <AiOutlineShoppingCart size={'30px'} />
                <p>{amount}</p>
            </CartIcon>
        </Header>

    );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #BBBBBB;
  padding-left: 20px;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  font-family: "Rubik", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  h1{
    margin: 0px;
    color: white;
  }

`
const CartIcon = styled.div`
    display: relative;
    
    p{
        margin: 0px;
        background-color:rgba(250, 250, 250, 0.83);
        border-radius: 15px;
        width: 20px;
        height: 20px;

        text-align: center;
        font-size: 0.8em;
        align-content: center;
        
        position: absolute;
        top: 10px;
        right: 30px;
    }
`

export default Navbar;