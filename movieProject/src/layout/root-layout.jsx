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
                <SOutlet>
                    <Outlet/>
                </SOutlet>
            </Conents>
        </>
    );
};

const Conents = styled.div`
    height:100%;

    align-content: start;
    grid-template-columns: 150px auto;
    gap: 10px;
    padding-top:50px;
    margin-right: 10px;

    background-color: #121212;
`

const SOutlet = styled.div`
    margin-left: 170px;
    
    height: 100%; 
`

export default RootLayout;