import React from 'react';
import * as S from '../Card/card.style';

const Card = ({movie}) => {
    return (
            <S.CardWrapper key={movie.id}>
                <S.CardPoster
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} Poster`}/>
                <S.CardTitle>{movie.title}</S.CardTitle>
                <S.CardReleaseDate>{movie.release_date}</S.CardReleaseDate>
            </S.CardWrapper>
    );
};

export default Card;
 