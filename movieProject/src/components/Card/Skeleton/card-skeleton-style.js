import styled, { keyframes } from "styled-components";

const skeleton = keyframes`
    0%{
        opacity: 1;
    }
    30%{
        opacity: 0.7;
    }
    50%{
        opacity: 0.4;
    }
    80%{
        opacity: 0.8;
    }
    100%{
        opacity: 1;
    }

`


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    gap: 3px;
    width: 150px;
`

const CardMain = styled.div`
    width: 150px;
    height: 225px;
    border-radius: 10px;
    background: rgb(230, 230, 230);
    overflow: hidden;
    animation: ${skeleton} 2s 1s infinite linear alternate;
`

const TextWrapper = styled.div`
    width: 150px;
    gap: 3px;
    height: 30px;
    display: flex;
    flex-direction: column;
`

const TitleBox = styled.div`
    background: rgb(230, 230, 230);
    height: 14.5px;
    border-radius: 10px;
    animation: ${skeleton} 2s 1s infinite linear alternate;
`

const DescriptionBox = styled.div`
    background: rgb(230, 230, 230);
    height: 14.5px;
    border-radius: 10px;
    animation: ${skeleton} 2s 1s infinite linear alternate;
`

export {Container, CardMain, TextWrapper, TitleBox, DescriptionBox }