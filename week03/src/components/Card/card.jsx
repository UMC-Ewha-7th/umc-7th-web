import styled from "styled-components";

const Card = (props) =>{
    return(
        <MovieCard>
            <img src={"https://image.tmdb.org/t/p/w1280/" + props.poster_path}/>
            <p> {props.title} </p>
            <p>{props.release_date}</p>
        </MovieCard>
    )
};

const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    gap: 3px;
    width: 150px;
    p{
        margin:0px;
        font-size:0.8em;
        word-wrap: break-word;
        color: #f0f0f0;
    }
    
    img{
        width: 150px;
        height: 225px;
        border-radius: 10px;
        object-fit: cover;
    }

    &:hover{
        filter: brightness(0.6);
        cursor: pointer;
    }
`

export default Card;