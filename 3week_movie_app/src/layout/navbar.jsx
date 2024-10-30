import React from 'react';
import {Link} from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-top">
                <div className="logo"><Link to={'/'}>JUDYFLIX</Link></div>

                <div className="navbar-right">
                    <Link to='/login' className="btn-login">로그인</Link>
                    <Link to='/signup' className="btn-signup">회원가입</Link>
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