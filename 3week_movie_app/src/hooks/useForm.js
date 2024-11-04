// 공통 폼 기능을 관리하는 함수.
// 폼 상태와 입력 처리, 유효성 검사 실행

import {useState, useEffect} from 'react';
import './useForm.css';

function useForm({initialValue, validate}) {
    const [values, setValues] = useState(initialValue || {}); // values 입력 값 저장, setValues 이 값을 업데이트, initalValue 초기값, 값이 없으면 빈 객체{} 사용
    const [touched, setTouched] = useState({}); // 유효성 검사를 통해 실시간으로 오류 메시지를 보여주기 위해 활용
    const [errors, setErrors] = useState({}); // 유효성 검사에서 발생하는 오류 메시지를 담고, setErrors는 이를 업데이트하는 함수

    const isValid = Object.keys(errors).length === 0;

    // 입력 값이 생기면(값이 변경되면) 호출되는 함수
    const handleChangeInput = (name, value) => {
        setValues({
            ...values,
            [name]: value,
        }); // 현재 입력한 값을 복사
        setTouched({...touched, [name]: true}); // 해당 필드를 true로 설정해 입력 필드가 touched(채워진) 상태로 업데이트
    };

    // 입력 필드의 속성을 생성하여 반환
    const getTextInputProps = (name) => {
        const value = values[name] || ''; // 해당 필드의 현재 값을 name으로 설정. 값이 없으면 빈 문자열 ''을 반환
        const onChange = (event) => handleChangeInput(name, event.target.value); // 값이 변경될때마다 handleChangeInPut을 호출하여 값과 터치 상태를 업데이트
        const onBlur = () => setTouched({...touched, [name]: true}); // 입력 필드에서 포커스가 벗어날때 (blur) 해당 필드를 touched 상태로 업데이트
        return {value, onChange, onBlur};
    };
    
    // values, validate가 변경될때마다 실행되어 유효성 검사
    useEffect(() => {
        const newErrors = validate(values); // 현재 values 상태 검사 후 newErrors에 오류 저장
        setErrors(newErrors); // 오류 메시지를 errors 상태에 저장
    }, [values, validate]); // values가 변경될 때마다 실행

    return {
        values,
        errors,
        touched,
        getTextInputProps,
    };
}   

export default useForm;

export const StyledInput = ({error, ...props}) => (
    <input
        className={`input ${error ? "error-border" : ""}`}
        {...props} /> 
)

export const StyledButton = ({childeren, ...props}) => {
    <input
        tpye="submit"
        className="button"
        value={childeren}
        {...props} />
};

export const StyledErrorText = ({children}) => (
    <div className="alert">{children}</div>
);

export const StyledSubmitButton = ({isValid, ...props}) => (
    <input
        type="submit"
        className={`button ${isValid ? "" : "disabled-button"}`}
        disabled={!isValid}
        style={{
            backgroundColor: isValid ? "var(--logo-color)" : "gray", 
            cursor: isValid ? "pointer" : "not-allowed",
        }}
        {...props} />
);