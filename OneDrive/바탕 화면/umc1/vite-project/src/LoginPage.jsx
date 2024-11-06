import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
    console.log('폼 데이터 제출:', data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto' }}>
      <label>Email</label>
      <input
        type="email"
        {...register("email")}
        onBlur={() => trigger("email")} 
      />
      <p style={{ color: 'red' }}>{errors.email?.message}</p>
      <label>Password</label>
      <input
        type="password"
        {...register("password")}
        onBlur={() => trigger("password")} 
      />
      <p style={{ color: 'red' }}>{errors.password?.message}</p>

      <button
        type="submit"
        disabled={!isValid} 
        style={{
          backgroundColor: isValid ? 'pink' : 'gray',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: isValid ? 'pointer' : 'not-allowed',
        }}
      >
        로그인
      </button>
    </form>
  );
};

export default LoginPage;