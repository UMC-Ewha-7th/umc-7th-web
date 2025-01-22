import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Layout = () => {
    const { username } = useAuthContext();
    return (
        <>
            <div>
                <Link to='/'>메인</Link>
                {username ?
                    <Link to='/profile'>{username}</Link>
                    :
                    <Link to='/login'>로그인</Link>
                }
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;