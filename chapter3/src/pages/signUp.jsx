import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function signUp() {
  //React Hook Form은 내부적으로 상태를 관리하기 때문에 useState로 별도의 상태를 유지할 필요가 없다.
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   if (name === 'email') {
  //     setEmail(value);
  //   } else if (name === 'password') {
  //     setPassword(value);
  //   } else {
  //     setConfirmPassword(value);
  //   }
  // };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!')
      .required('이메일을 입력해주세요!'),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/,
        '비밀번호는 영어, 숫자, 특수문자만 가능합니다.'
      )
      .required('비밀번호를 입력해주세요!')
      .min(8, '비밀번호는 8자 이상이어야 합니다!')
      .max(16, '비밀번호는 16자 이하여야 합니다!'),
    confirmPassword: yup
      .string()
      .required('비밀번호를 한번 더 입력해 주세요')
      // oneOf()는 지정된 값 중 하나와 일치해야 함을 나타내며, password와 비교한다.
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다'),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // 입력 값 변경 시 유효성 검사 결과 반영
  });

  const onSubmit = (data) => {
    console.log(data.email);
    console.log(data.password);
    console.log(data.confirmPassword);
    reset();
  };

  // 모든 입력 값을 추적
  const formValues = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignUp>
        <Title>회원가입</Title>

        <Input
          placeholder="이메일을 입력해주세요!"
          // value={email}
          // onChange={(e) => handleChangeInput('email', e.target.value)}
          type="email"
          {...register('email')}
        />
        <Error>{errors.email?.message}</Error>
        <Input
          // value={password}
          // onChange={(e) => handleChangeInput('password', e.target.value)}
          placeholder="비밀번호를 입력해주세요!"
          type="password"
          {...register('password')}
        />
        <Error>{errors.password?.message}</Error>
        <Input
          // value={confirmPassword}
          // onChange={(e) => handleChangeInput('confirmPassword', e.target.value)}
          placeholder="비밀번호를 다시 입력해주세요!"
          type="password"
          {...register('confirmPassword')}
        />
        <Error>{errors.passwordConfirm?.message}</Error>

        <SignUpButton disabled={!isValid}>제출</SignUpButton>
      </SignUp>
    </form>
  );
}

const SignUpButton = styled.button`
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

const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  row-gap: 15px;
`;

const Input = styled.input`
  width: 400px;
  height: 45px;
  border-radius: 7px;
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
  text-align: left;
  margin: -5px;
`;
export default signUp;
