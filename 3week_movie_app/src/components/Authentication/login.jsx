import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import './login.css';

const Login = () => {
    const schema = yup.object().shape({
        email: yup.string().email('이메일 형식으로 입력해주세요').required(),
        password: yup.string().min(8, '비밀번호는 최소 8자입니다').max(16, '비밀번호는 최대 16자입니다').required(),
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',  // 입력 변화에 따라 실시간으로 유효성 검사
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>로그인</h2>

            <input 
                type="email" 
                placeholder="e-mail" 
                {...register("email")}
                className={errors.email ? 'error-border' : ''} 
            />
            <p className='alert'>{errors.email?.message}</p>

            <input 
                type="password" 
                placeholder="password" 
                {...register("password")}
                className={errors.password ? 'error-border' : ''} 
            />
            <p className='alert'>{errors.password?.message}</p>

            <input 
                type="submit" 
                value="Sign In (Log in)" 
                disabled={!isValid}  // 유효하지 않으면 버튼 비활성화
                className={!isValid ? 'disabled-button' : ''}  // 유효하지 않으면 회색 버튼 스타일 추가
            />
        </form>
    );
};

export default Login;
