import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';

import './login.css';
import { loginUser } from '../../api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import useCustomForm from '../../hooks/useForm';
import { loginValidationSchema } from './validate';

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const {register, handleSubmit, errors, isValid} = useCustomForm(loginValidationSchema);

    const onSubmit = async (data) => {
        console.log('Form submitted with data:', data);
        try {
            const response = await loginUser({
                email: data.email,
                password: data.password
            });
            console.log('Response received:', response.data);

            if (response.data.accessToken && response.data.refreshToken) {
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                
                const nickname = data.email.split('@')[0];
                localStorage.setItem('nickname', nickname);
                
                login();
                alert('로그인에 성공했습니다. 메인 페이지로 이동합니다');
                navigate('/'); // 메인 페이지로 이동
            } else {
                console.warn('Login failed:', response.data);
                alert('로그인에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('Login error:', error.response?.data || error.message);
            alert('로그인에 실패했습니다. 다시 시도해주세요.');
        }
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

/* const Login = () => {
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
            <h2 className="form-title">로그인</h2>
            
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

export default Login; */