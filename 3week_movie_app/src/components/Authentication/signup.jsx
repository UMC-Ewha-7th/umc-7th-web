import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import "./signup.css";

const Signup = () => {
    const schema = yup.object().shape({
        email: yup.string().email('이메일 형식으로 입력해주세요').required(),
        password: yup.string().min(8, '비밀번호는 최소 8자입니다').max(16, '비밀번호는 최대 16자입니다').required(),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다').required()
    })

    // useForm 폼 상태를 관리하는 훅. 반환되는 객체에서 register과 handleSubmit 함수를 추출한다
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data) => { 
        console.log('회원가입 데이터')
        console.log(data);
    } // onSubmit 함수는 폼 제출되었을 때 실행될 동작을 정의하는 함수. console.log로 폼 제출을 확인함.

    return (
        // handleSubmit으로 감싸진 onSubmit함수는 폼 제출 시 호출됨
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>회원가입</h2>

            {/* register 함수로 input에 이름을 연결하여 폼 데이터를 관리함  */}
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

            <input 
                type={'submit'} 
                value="Sign Up"
                disabled={!isValid}
                className={!isValid ? 'disabled-button' : ''} />
        </form>
    );
};

export default Signup;