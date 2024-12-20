import styled from "styled-components";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const schema = yup.object().shape({
        email: yup.string().email('유효한 이메일 주소를 입력해 주세요').required('이메일을 반드시 입력해 주세요'),
        password: yup.string().min(8,'비밀번호는 최소 8자리입니다.').max(16, '비밀번호는 최대 16자리입니다.').required('비밀번호를 반드시 입력해 주세요.'),
        passwordCheck: yup.string().min(8,'비밀번호는 최소 8자리입니다.').max(16, '비밀번호는 최대 16자리입니다.').required('비밀번호를 반드시 확인해 주세요.').oneOf([yup.ref('password'), null],
        '비밀번호가 일치하지 않습니다.')
    });

    const {register, handleSubmit, formState:{errors, isValid}} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const request = await axios.post('http://localhost:3000/auth/register', {
              email: data.email,
              password: data.password,
              passwordCheck: data.passwordCheck,
            }, { headers: { 'Content-Type': 'application/json' }});
            console.log(data);

            alert('회원가입 성공!');
            navigate('/login', {});
            // 필요 시 로그인 페이지로 리디렉션
        }
        catch (error) {
            console.error('회원가입 실패:', error);
            alert('회원가입에 실패했습니다.');
        }
    }



    return(
        <div>
            <SignUpForm onSubmit = {handleSubmit(onSubmit)}>
                <h2> 회원가입 </h2>
                <Input type={'email'}{...register("email")} placeholder="이메일을 입력해주세요" />
                <ErrorText> {errors.email?.message} </ErrorText>

                <Input type={'password'}{...register("password")} placeholder="비밀번호를 입력해주세요" />
                <ErrorText> {errors.password?.message} </ErrorText>

                <Input type={'password'}{...register("passwordCheck")} placeholder="비밀번호를 다시 입력해주세요" />
                <ErrorText> {errors.passwordCheck?.message} </ErrorText>
                
                <InputB type={'submit'} disabled={!isValid}/>
            </SignUpForm>
        </div>
    );
};

const SignUpForm = styled.form`
    color: #f0f0f0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    background-color: #FFDD1A;
    border-radius: 4px;
    padding: 8px;

`
export default SignUp;