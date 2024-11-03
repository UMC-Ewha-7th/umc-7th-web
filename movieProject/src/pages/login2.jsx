import styled from "styled-components";
import { useState } from "react";
import useForm from "../hooks/use-from"
import { validateLogin } from "./utils/validate";


const LoginPage = () => {
    const login = useForm({
        initialValue:{
            email:'',
            password:'',
        },
        validate: validateLogin
    })

    const handlePressLogin = () =>{
        console.log(login.values.email, login.values.password)
    }

    return(
        <Container>
            <h2> 로그인 페이지 </h2>
            <Input error={login.touched.email && login.errors.email} type={'email'} placeholder={"이메일을 입력해 주세요"} {...login.getTextInputProps('email')}/>
            {login.touched.email && login.errors.email && <ErrorText> {login.errors.email} </ErrorText>}

            <Input error={login.touched.password && login.errors.password} type={'password'} placeholder={"비밀번호를 입력해 주세요"} {...login.getTextInputProps('password')}/>
            {login.touched.password && login.errors.password && <ErrorText> {login.errors.password} </ErrorText>}

            <button onClick={handlePressLogin}> 로그인 </button>
            
        </Container>
    );

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        color: #f0f0f0;
    }
    button{
        width: 316px;
        background-color: #FFDD1A;
        border-radius: 4px;
        padding: 8px;        
    }

`

const Input = styled.input`
    margin: 10px 0;
    padding: 8px;
    width: 300px;
    border-radius: 4px;

    border: ${props => props.error ? '3px solid red' : '1px solid #CCC'};
    &:focus{
        border-color:#FFDD1A;
    }
`

const ErrorText = styled.h5`
    color: red;
    margin: 0px;
`

export default LoginPage;