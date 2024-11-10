import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const LoginButton = styled.button`
  color: white;
  background-color: #ee51b2;
  border-radius: 7px;
  width: 260px;
  height: 30px;
  margin-top: 5px;
  &:disabled {
    background-color: gray;
  }
`;

const Title = styled.h2`
  color: white;
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  row-gap: 5px;
`;

const Input = styled.input`
  width: 250px;
  height: 25px;
  border-radius: 7px;
`;

const Error = styled.div`
  color: red;
  font-size: 10px;
  text-align: left;
`;

function TryLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!'),
    password: yup
      .string()
      .required('비밀번호는 8~16자 사이로 입력해주세요!')
      .min(8, '비밀번호는 8~16자 사이로 입력해주세요!')
      .max(16, '비밀번호는 8~16자 사이로 입력해주세요!'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('폼 데이터 제출');
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Login>
        <Title>로그인</Title>

        <Input
          placeholder="이메일을 입력해주세요!"
          value={email}
          onChange={(e) => handleChangeInput('email', e.target.value)}
          type="email"
          {...register('email')}
        />
        <Error>{errors.email?.message}</Error>
        <Input
          value={password}
          onChange={(e) => handleChangeInput('password', e.target.value)}
          placeholder="비밀번호를 입력해주세요!"
          type="password"
          {...register('password')}
        />
        <Error>{errors.password?.message}</Error>
        <LoginButton disabled={!isValid}>로그인</LoginButton>
      </Login>
    </form>
  );
}

export default TryLogin;
