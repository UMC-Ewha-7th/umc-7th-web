import { Link } from "react-router-dom";
import styled from "styled-components";
import '../layout/layout.css';

const Navbar = () =>{
    return(
        <nav className="navbar">
            <LogoLink to={'/'}>Remflix</LogoLink>
            <div className="navButton">
                <ButtonLink1 to='/login'>로그인</ButtonLink1>
                <ButtonLink2 to='/signup'>회원가입</ButtonLink2>
            </div>
        </nav>
    );
};

const ButtonLink1 = styled(Link)`
    background-color: #00000000;
    border-radius: 5px;
    text-decoration: none;  
    color: #f0f0f0;
    padding:3px;
    &:hover{
        color: #FFDD1A;
    }
`

const ButtonLink2 = styled(Link)`
    background-color: #FFDD1A;
    border-radius: 5px;
    text-decoration: none;  
    color: rgb(58, 58, 58);
    padding:3px;
    &:hover{
        background-color: #FFDD1A50;
        color:white;
    }
`

const LogoLink = styled(Link)`
    text-decoration: none;
    color: #FFDD1A;
`

export default Navbar;