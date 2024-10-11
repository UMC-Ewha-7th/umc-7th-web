import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Sidebar from "../components/sidebar.jsx";
import './layout.css';
import styled from "styled-components";

const RootLayout = () => {
    return(
        <>
            <Navbar/>

            <Conents>
                <Sidebar/>
                <Outlet/>
            </Conents>
        </>
    );
};

const Conents = styled.div`
    display: grid;
    grid-template-columns: 150px auto;
    gap: 10px;
    padding-top:50px;
`

export default RootLayout;