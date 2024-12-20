import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeBeforeLogin = ({id, backdrop_path}) => {
    return(
        <BeforeLogin>
            <img src={"https://image.tmdb.org/t/p/w1280/"+backdrop_path}/>
            <TextArea>
                <h2>Remflix</h2>
                <ToSignup to='/signup'>회원가입 후 이용하기</ToSignup>
                <p>이미 회원이라면?</p>
                <ToLogin to='/login'>로그인하러 가기</ToLogin>
            </TextArea>

        </BeforeLogin>
    );
}

const BeforeLogin = styled.div`

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

        position: absolute;
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.2;
    };
`

const TextArea = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin: 5px;
        color:rgba(240, 240, 240, 0.75)    
    };
`

const ToSignup = styled(Link)`
    box-sizing: content-box;
    width: 50%;
    margin-bottom: 15px;

    background-color: #FFDD1A;
    border-radius: 5px;
    text-decoration: none;  
    text-align: center;
    color: rgb(58, 58, 58);
    padding: 0.5em;
    &:hover{
        background-color: #FFDD1A50;
        color: #f0f0f0;
    }
`
const ToLogin = styled(Link)`
    box-sizing: content-box;
    width: 50%;
    margin-bottom: 15px;

    background-color: #00000000;
    border: solid, 2px, #f0f0f0;
    border-radius: 5px;
    text-decoration: none; 
    text-align: center; 
    color: #f0f0f0;
    padding: 0.5em;
    &:hover{
        border: solid, #FFDD1A;
        background-color: #FFDD1A50;
    }
`

export default HomeBeforeLogin;