import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './navbar';
import './root-layout.css';

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;