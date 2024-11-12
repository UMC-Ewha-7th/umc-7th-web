import React, { useContext, useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import './navbar.css';
import { AuthContext } from '../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUserData = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        throw new Error('No access token found');
    }
    try {
        const response = await axios.get('http://localhost:3000/user/me', { // 전체 URL 확인
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // 오류 재발생 시켜 useQuery에서 감지 가능
    }
};

const Navbar = () => {
    const {isAuthenticated, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    // const [nickname, setNickname] = useState('');
    const {data:userData, isLoading, isError} = useQuery({
        queryKey: ['userData'],
        queryFn: fetchUserData,
        enabled: isAuthenticated,
        onSucess: () => {
            console.log('User data fetched successfully:', userData);
        },
        OnError: (error) => {
            console.error('Error fetching user data:', error);
        }
    });
    console.log('Loading status:', isLoading);
    console.log('Error status:', isError);
    console.log('User data:', userData);  

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('nickname');
        logout();
        navigate('/');
    };

   /* useEffect(() => {
        const storedNickname = localStorage.getItem('nickname');
        console.log('Stored Nickname:', storedNickname);
        if (storedNickname) {
            setNickname(storedNickname);
        }
    }, []); */

    return (
        <nav>
            <div className="navbar-top">
                <div className="logo"><Link to={'/'}>JUDYFLIX</Link></div>

                <div className="navbar-right">
                    {isAuthenticated ? (
                        <>
                            <span className="nickname-message">
                                {isLoading ? '로딩 중...' : isError ? '에러 발생' : userData?.email ? `${userData.email.split('@')[0]}님 반갑습니다` : ''}
                            </span>

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