import styled from "styled-components";

export const CardList = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 15px;
`

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    

    button {
        padding: 8px 16px;
        background-color: #FFDD1A;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1em;
        font-family: "Noto Sans KR", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    }

    span {
        font-family: "Noto Sans KR", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-size: 1.2em;
        font-weight: bold;
        color: #FAFAFA;
    }

`