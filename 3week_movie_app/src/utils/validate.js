const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

function validateLogin(values) {
    const errors = {};

    if(!emailPattern.test(values.email || '')) {
        errors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if(!values.password || values.password.length < 8 || values.password.length > 16) {
        errors.password = "비밀번호는 8-16자 사이여야 합니다. "
    }

    return errors;
}

export {validateLogin};