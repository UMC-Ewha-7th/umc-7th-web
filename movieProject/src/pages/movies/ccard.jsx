import { Link } from "react-router-dom";
import styled from "styled-components";

const CCard = (props) =>{
    return(
        <CatCard to={props.link}>
            <img src={props.bg_path}/>
            <p> {props.title} </p>
        </CatCard>
    )
};

const CatCard = styled(Link)`
    display: flex;
    width: 250px;
    height: 150px;
    position: relative;
    p{
        margin: 0px;
        position: absolute;
        bottom: 5%;
        left: 5%;
        word-wrap: break-word;
        color: #f0f0f0;
        background-color: #121212BB;
    }
    img{
        object-fit: cover;
        border-radius:10px;
        width:100%;
        height: 100%;
    }
    &:hover{
        filter: brightness(0.6);
        cursor: pointer;
    }
`

export default CCard;