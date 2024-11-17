import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  //React Hook Form은 내부적으로 상태를 관리하기 때문에 useState로 별도의 상태를 유지할 필요가 없다.
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordCheck, setpasswordCheck] = useState('');

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   if (name === 'email') {
  //     setEmail(value);
  //   } else if (name === 'password') {
  //     setPassword(value);
  //   } else {
  //     setpasswordCheck(value);
  //   }
  // };
  const navigate = useNavigate();

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
    passwordCheck: yup
      .string()
      .required('비밀번호를 한번 더 입력해 주세요')
      // oneOf()는 지정된 값 중 하나와 일치해야 함을 나타내며, password와 비교한다.
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다'),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // 입력 값 변경 시 유효성 검사 결과 반영
  });

  const onSubmit = async (data) => {
    console.log(data.email);
    console.log(data.password);
    console.log(data.passwordCheck);

    const requestData = { ...data };
    console.log('회원가입 요청 데이터:', requestData);

    try {
      const response = await axios.post(
        'http://localhost:3000/auth/register',
        requestData
      );
      console.log('회원가입 완료: ', response.data);

      navigate('/login');
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // 모든 입력 값을 추적
  const formValues = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignUps>
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
          // value={passwordCheck}
          // onChange={(e) => handleChangeInput('passwordCheck', e.target.value)}
          placeholder="비밀번호를 다시 입력해주세요!"
          type="password"
          {...register('passwordCheck')}
        />
        <Error>{errors.passwordCheck?.message}</Error>

        <SignUpButton disabled={!isValid} type="submit">
          제출
        </SignUpButton>
      </SignUps>
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

const SignUps = styled.div`
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

export default SignUp;
