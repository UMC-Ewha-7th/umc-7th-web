import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import styled from "styled-components";
import '../layout/layout.css';

const Navbar = () =>{
    const { isAuthenticated, logout } = useAuth();
    const nickname = localStorage.getItem("nickname");

    return(
        <nav className="navbar">
            <LogoLink to={'/'}>Remflix</LogoLink>
            {isAuthenticated ? (
                <div className="navButton">
                    <p>{nickname}님 환영합니다</p>
                    <ButtonLink2 onClick={logout}>로그아웃</ButtonLink2>
                </div>
            ):(
                <div className="navButton">
                    <ButtonLink1 to='/login'>로그인</ButtonLink1>
                    <ButtonLink2 to='/signup'>회원가입</ButtonLink2>
                </div>
            )}
        </nav>
    );
};
const ButtonLink1 = styled(Link)`
    box-sizing: content-box;
    height: 30px;
    align-content: center;

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
    box-sizing: content-box;
    height: 30px;
    align-content: center;
    align-items: center;

    background-color: #FFDD1A;
    border-radius: 5px;
    text-decoration: none;  
    color: rgb(58, 58, 58);
    padding:3px;
    &:hover{
        background-color: #FFDD1A50;
    }
`
const LogoLink = styled(Link)`
    text-decoration: none;
    color: #FFDD1A;
`

export default Navbar;