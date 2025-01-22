import { FormEvent } from "react";
import { getAuth } from "../apis/auth";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const { setUsername } = useAuthContext();
    const handleLogin = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget));
        try {
            const user = await getAuth({
                username: String(formData.username),
                password: String(formData.password)
            });
            setUsername(user.username);
            navigate('/');
        } catch (e) {
            alert('로그인 실패');
            console.error(e);
        };
    }
    return (
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="username">username</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">입력</button>
        </form>
    )
};

export default LoginPage;