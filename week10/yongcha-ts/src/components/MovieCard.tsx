import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const basePath = import.meta.env.VITE_BASE_PATH;

const MovieCard = ({posterPath, title, releaseDate, movieId}:{
    posterPath: string,
    title: string,
    releaseDate: string,
    movieId: number
}) => {
    const navigate = useNavigate();

    return (
        <MovieCardDiv>
            <MoviePosterImg
            src={basePath+posterPath}
            onClick={() => {
                navigate(`/movies/${movieId}`, {
                    state: { movieId: movieId },
                })
            }}
            />
            <MovieTitle>{title}</MovieTitle>
            <MovieDate>{releaseDate}</MovieDate>
        </MovieCardDiv>
    )
}

export default MovieCard;

const MovieCardDiv = styled.div`
    height: 230px;
    width: 120px;
`

const MoviePosterImg = styled.img`
    width: 120px;
    height: 173px;
    border-radius: 0.5em;
    margin-bottom: 1.5px;
    &:hover {
        cursor: pointer;
        filter: brightness(0.5);
    }
`

const MovieTitle = styled.div`
    max-width: 130px;
    color: white;
    font-weight: bold;
    font-size: 0.8em;
    margin-left: 3px;
`

const MovieDate = styled.div`
    color: white;
    font-size: 0.7em;
    margin-left: 3px;
`