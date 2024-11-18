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
        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    }

    span {
        font-size: 1.2em;
        font-weight: bold;
    }

`