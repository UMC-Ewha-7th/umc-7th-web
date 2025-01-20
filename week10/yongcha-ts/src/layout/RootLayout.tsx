import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const RootLayout = () => {
    const isHome = location.pathname === '/';
    return (
        <ScrollDiv>
            <RootContainer>
                <FixedHeader>
                    <Navbar />
                </FixedHeader>
                <MainContainer padding={isHome.toString()}>
                    <Outlet />
                </MainContainer>
            </RootContainer>
        </ScrollDiv>
    )
}

export default RootLayout;

const MainContainer = styled.div<{ padding: string }>`
    ${({padding}) => {
        const paddingLR = padding==='true' ? '10px' : '40px';
        return `padding: 0-px ${paddingLR} 20px ${paddingLR};`
    }}
    background-color: black;
    height: auto;
    min-height: 100%;
    position: relative;
    min-width: 900px;
    display: flex;
    flex-direction: column;
`

const FixedHeader = styled.div`
    position: fixed;
    z-index: 11;
    width: 100%;
`

const RootContainer = styled.div`
    height: 100vh;
    min-width: 1100px;
`

const ScrollDiv = styled.div`
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.4)
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`;