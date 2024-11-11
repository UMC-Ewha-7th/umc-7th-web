import React, { useContext, useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import './navbar.css';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const {isAuthenticated, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('nickname');

        logout();
        navigate('/');
    };

    useEffect(() => {
        const storedNickname = localStorage.getItem('nickname');
        console.log('Stored Nickname:', storedNickname);
        if (storedNickname) {
            setNickname(storedNickname);
        }
    }, []);

    return (
        <nav>
            <div className="navbar-top">
                <div className="logo"><Link to={'/'}>JUDYFLIX</Link></div>

                <div className="navbar-right">
                    {isAuthenticated ? (
                        <>
                            <span className="nickname-message">{nickname ? `${nickname}님 반갑습니다` : ''}</span>
                            <button onClick={handleLogout} className="btn-logout">로그아웃</button>
                        </>
                    ) : (
                        <>
                            <Link to='/login' className="btn-login">로그인</Link>
                            <Link to='/signup' className="btn-signup">회원가입</Link>
                        </>
                    )}
                </div>
            </div>

            <div className="nav-menu">
                <ul>
                    <li><Link to='/search'><span className="material-symbols-outlined search-icon">search</span>Search</Link></li>
                    <li><Link to='/category'><span className="material-symbols-outlined movie-icon">movie</span>Movie</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;