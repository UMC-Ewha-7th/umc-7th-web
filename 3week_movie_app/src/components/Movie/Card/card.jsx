import React from 'react';
import * as S from '../Card/card.style';
import { useNavigate } from 'react-router-dom';

const Card = ({movie}) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/movie/${movie.id}`, {
            replace: false,
            state: {MovieId: movie.id}
        });
    };

    return (
        <>     
        <S.CardWrapper key={movie.id} onClick={handleCardClick}>
                <S.CardPoster
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} Poster`}/>
                <S.CardTitle>{movie.title}</S.CardTitle>
                <S.CardReleaseDate>{movie.release_date}</S.CardReleaseDate>
        </S.CardWrapper>
        </>
    );
}; 

export default Card;