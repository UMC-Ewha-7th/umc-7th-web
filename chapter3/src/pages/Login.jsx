import React, { useState } from 'react';
import styled from 'styled-components';
import useForm from '../hooks/use-form';
import { ValidateLogin } from '../utils/validate';

function Login() {
  const login = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    validate: ValidateLogin,
  });

  console.log(login.values, login.errors, login.touched);

  const handlePressLogin = () => {
    console.log(login.values.email, login.values.password);
  };

  return (
    <Logins>
      <Title>로그인</Title>

      <Input
        error={login.touched.email && login.errors.email}
        placeholder={'이메일을 입력해주세요!'}
        type={'email'}
        {...login.getTextInputProps('email')}
      />
      {login.touched.email && login.errors.email && (
        <Error>{login.errors.email}</Error>
      )}
      <Input
        error={login.touched.password && login.errors.password}
        placeholder={'비밀번호를 입력해주세요!'}
        type={'password'}
        {...login.getTextInputProps('password')}
      />
      {login.touched.password && login.errors.password && (
        <Error>{login.errors.password}</Error>
      )}

      <LoginButton onClick={handlePressLogin}>로그인</LoginButton>
    </Logins>
  );
}

const LoginButton = styled.button`
  color: white;
  background-color: #ee51b2;
  border-radius: 7px;
  width: 400px;
  height: 45px;
  margin-top: 5px;
  &:disabled {
    background-color: gray;
  }
`;

const Title = styled.h1`
  color: white;
`;

const Logins = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  row-gap: 20px;
`;

const Input = styled.input`
  width: 400px;
  height: 45px;
  border-radius: 7px;

  /* 에러일 경우 border 색상 변경 */
  border: ${(props) => (props.error ? '2px solid red' : '1px solid #ccc')};
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
  text-align: left;
  margin: -5px;
`;

export default Login;
