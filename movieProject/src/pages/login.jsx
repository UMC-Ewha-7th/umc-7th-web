import styled from "styled-components";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
    const schema = yup.object().shape({
        email: yup.string().email('유효한 이메일 주소를 입력해 주세요').required('이메일을 반드시 입력해 주세요'),
        password: yup.string().min(8,'비밀번호는 최소 8자리입니다.').max(16, '비밀번호는 최대 16자리입니다.').required('비밀번호를 반드시 입력해 주세요.')
    });

    const {register, handleSubmit, formState:{errors}} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출')
        console.log(data);
    }

    return(
        <div>
            <LoginForm onSubmit = {handleSubmit(onSubmit)}>
                <h2> 로그인 페이지 </h2>
                <input type={'email'}{...register("email")} placeholder="이메일을 입력해주세요"/>
                <p style={{color:'red'}}>{errors.email?.message}</p>
                
                <input type={'password'}{...register("password")} placeholder="비밀번호를 입력해주세요"/>
                <p style={{color:'red'}}>{errors.password?.message}</p>
                
                <input class='InputB' type={'submit'}/>
            </LoginForm>
        </div>
    );
};

const LoginForm = styled.form`
    color: #f0f0f0;

    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 20%;
        height:30px;
        border-radius: 5px;
    }
    p{
        padding: 0px;
        margin: 0px;
    }
        
    .InputB{
        background-color: #FFDD1A;
    }
`

export default Login;