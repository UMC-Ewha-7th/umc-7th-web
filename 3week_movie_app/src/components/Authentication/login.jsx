import React from 'react';
<<<<<<< HEAD
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import './login.css';

const Login = () => {
=======
import useForm, { StyledInput, StyledButton, StyledErrorText, StyledSubmitButton } from '../../hooks/useForm';

import { validateLogin } from '../../utils/validate';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const Login = () => {
    const login = useForm({
        initialValue: {
            email: '',
            password: '',
        },
        validate: validateLogin,
    });

    const handlePressLogin = (event) => {
        event.preventDefault();
        if (Object.keys(login.errors).length === 0) {
            console.log("로그인 성공!", login.values);
        } else {
            console.log("유효성 검사 실패", login.errors);
        }
    };

    return (
        <form className="container" onSubmit={handlePressLogin}>
            <h2>로그인</h2>
            
            <StyledInput
                type="email"
                placeholder="이메일을 입력해주세요"
                error={login.touched.email && login.errors.email}
                {...login.getTextInputProps("email")}
            />
            {login.touched.email && login.errors.email && (
                <StyledErrorText>{login.errors.email}</StyledErrorText>
            )}

            <StyledInput
                type="password"
                placeholder="비밀번호를 입력해주세요"
                error={login.touched.password && login.errors.password}
                {...login.getTextInputProps("password")}
            />
            {login.touched.password && login.errors.password && (
                <StyledErrorText>{login.errors.password}</StyledErrorText>
            )}

            <StyledSubmitButton
                type="submit" 
                value="Sign In (Log in)"/>
        </form>
    );
};

export default Login;



/* const Login = () => {
>>>>>>> 8d399ce (initial commit after computer backup)
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

<<<<<<< HEAD
export default Login;
=======
export default Login; */
>>>>>>> 8d399ce (initial commit after computer backup)
