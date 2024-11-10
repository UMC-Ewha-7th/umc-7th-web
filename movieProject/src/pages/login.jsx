import styled from "styled-components";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const schema = yup.object().shape({
        email: yup.string().email('유효한 이메일 주소를 입력해 주세요').required('이메일을 반드시 입력해 주세요'),
        password: yup.string().min(4,'비밀번호는 최소 8자리입니다.').max(16, '비밀번호는 최대 16자리입니다.').required('비밀번호를 반드시 입력해 주세요.')
    });
    const {register, handleSubmit, formState:{errors, isSubmitting, isValid}} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();
    const onSubmit = async(data) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
              email: data.email,
              password: data.password,
            });
            console.log(response);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('nickname', data.email.split("@", 1))
            alert('로그인 성공!');
            navigate('/', {});
            window.location.reload();
            // 리디렉션 또는 사용자 정보 설정 로직 추가
        }
        catch (error) {
            console.error('로그인 실패:', error);
            alert('로그인에 실패했습니다.');
        }
    }

    return(
        <div>
            <LoginForm onSubmit = {handleSubmit(onSubmit)}>
                <h2> 로그인 페이지 </h2>
                <Input type={'email'}{...register("email")} placeholder="이메일을 입력해주세요"/>
                <ErrorText> {errors.email?.message} </ErrorText>
                
                <Input type={'password'}{...register("password")} placeholder="비밀번호를 입력해주세요"/>
                <ErrorText> {errors.password?.message} </ErrorText>
                
                <InputB type={'submit'} disabled={!isValid}/>
            </LoginForm>
        </div>
    );
};

const LoginForm = styled.form`
    color: #f0f0f0;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    margin: 10px 0;
    padding: 8px;
    width: 300px;
    border-radius: 4px;

    border: ${(props) => (props.error ? '3px solid red' : '1px solid #CCC')};
    &:focus{
        border-color:#FFDD1A;
    }
`

const ErrorText = styled.h5`
    color: red;
    margin: 0px;
`

const InputB = styled.input`
    width: 316px;
    background-color: ${(props) => (props.isValid ? '#CCC' : '#FFDD1A')};
    border-radius: 4px;
    padding: 8px;
`

export default Login;