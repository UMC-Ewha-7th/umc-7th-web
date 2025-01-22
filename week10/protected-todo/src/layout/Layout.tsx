import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    return (
        <>
            <div>
                <Link to='/'>메인</Link>
                {isLoggedIn ?
                    <Link to='/profile'>프로필</Link>
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