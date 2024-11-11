import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

// 회원가입 api
export const signupUser = async(userData) => {
    return await axios.post('http://localhost:3000/auth/register', userData);
};

// 로그인 api
export const loginUser = (userData) => {
    return api.post('/auth/login', userData);
};

export default api;