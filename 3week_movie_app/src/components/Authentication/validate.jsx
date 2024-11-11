import * as yup from 'yup';

//birthdate
const today = new Date();
today.setHours(0,0,0,0);

export const signupValidateationSchema = yup.object().shape({
    email: yup.string().email('이메일 형식으로 입력해주세요').required(),
    password: yup.string().min(8, '비밀번호는 최소 8자입니다').max(16, '비밀번호는 최대 16자입니다').required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다').required(),
    birthdate: yup.date()
        .max(today, '현재 시각 이후의 날짜는 선택할 수 없습니다')
        .min(new Date(1990,0, 1), '너무 과거의 날짜는 선택할 수 없습니다')
        .required('생년월일을 입력해주세요'),
    gender: yup.string().required('성별은 필수입니다'),
});

export const loginValidationSchema = yup.object().shape({
    email: yup.string().email('이메일 형식으로 입력해주세요').required(),
    password: yup.string().min(8, '비밀번호는 최소 8자입니다').max(16, '비밀번호는 최대 16자입니다').required(),
})
