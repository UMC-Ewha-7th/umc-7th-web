import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import "./signup.css";

import {signupUser} from '../../api';
import {useNavigate} from 'react-router-dom';

import useCustomForm from '../../hooks/useForm';
import { signupValidateationSchema } from './validate';

const Signup = () => {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const {register, handleSubmit, errors, isValid} = useCustomForm(signupValidateationSchema);
    
    const onSubmit = async(data) => {
        try {
            const response = await signupUser({
                email: data.email,
                password: data.password,
                passwordCheck: data.confirmPassword,
                birthDate: data.birthDate,
                gender: data. gender,
            });

            const {accessToken, refreshToken} = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            const extractedNickname = data.email.split('@')[0];
            setNickname(extractedNickname);

            console.log('회원가입 데이터:', response.data);
            alert('회원가입이 완료되었습니다. 환영합니다, {extractNickname}님!');
            navigate('/login');

        } catch(error) {
            console.log('회원가입 실패:', error.response?.data || error.message);
            alert('회원가입에 실패했습니다. 다시 시도해주세요');
        }
    }; // onSubmit 함수는 폼 제출되었을 때 실행될 동작을 정의하는 함수. console.log로 폼 제출을 확인함.

    return (
        // handleSubmit으로 감싸진 onSubmit함수는 폼 제출 시 호출됨
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>회원가입</h2>
            
            {/* register 함수로 input에 이름을 연결하여 폼 데이터를 관리함  */}
            <input
                type={'email'}
                placeholder="e-mail"
                {...register('email')}
                className={errors.email ? 'error-border' : ''}/>
            <p className='alert'>{errors.email?.message}</p>
            
            <input
                type={'password'}
                placeholder="password"
                {...register('password')}
                className={errors.password ? 'error-border' : ''}/>
            <p className='alert'>{errors.password?.message}</p>

            <input
                type={'password'}
                placeholder="Confirm Password"
                {...register('confirmPassword')}
                className={errors.confirmPassword ? 'error-border' : ''}/> 
            <p className='alert'>{errors.confirmPassword?.message}</p>

            <div className="form-group-inline">
                <label htmlFor="birthdate" className="label-inline">생년월일: </label>
                <input
                    id="birthdate"
                    type="date"
                    {...register('birthdate')}
                    className={errors.birthDate ? 'error-border' : 'input-inline'}/>
            </div>
            <p className='alert'>{errors.birthDate?.message}</p>

            <div className="form-groupinline">
                <label htmlFor="gender" className="label-inline">성별: </label>
                <select
                    id="gender"
                    {...register('gender')}
                    className={errors.gender ? 'error-border' : 'input-inline'}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="femail">Femail</option>
                    <option value="other">Other</option> 
                </select>
            </div>
            <p className='alert'>{errors.gender?.message}</p>

            <input
                type={'submit'}
                value="Sign Up"
                disabled={!isValid}
                className={!isValid ? 'disabled-button' : ''} />
                
        </form>
    );
};

export default Signup;