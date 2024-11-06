import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: black;
  padding-top: 50px;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 20px;
  background-color: black;
  border-radius: 8px;
  gap: 10px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: none;
  outline: none;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const SubmitButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? 'gray' : 'pink')};
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
`;

const LoginPage = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('올바른 이메일 형식이 아닙니다.')
      .required('이메일을 반드시 입력해주세요.'),
    password: yup
      .string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하여야 합니다.')
      .required('비밀번호를 입력해주세요.'),
  });

  const { register, handleSubmit, formState: { errors, isValid }, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('로그인 정보:', data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>로그인</Title>
        <Input
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...register("email")}
          onBlur={() => trigger("email")}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...register("password")}
          onBlur={() => trigger("password")}
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <SubmitButton type="submit" disabled={!isValid}>
          로그인
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default LoginPage;