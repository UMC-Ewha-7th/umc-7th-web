import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import '../../variable.css';

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
        <CardWrapper key={movie.id} onClick={handleCardClick}>
                <CardPoster
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} Poster`}/>
                <CardTitle>{movie.title}</CardTitle>
                <CardReleaseDate>{movie.release_date}</CardReleaseDate>
        </CardWrapper>
        </>
    );
}; 

export default Card;

export const CardList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  margin: 10px;
  cursor: pointer;

  &:hover {
      filter: brightness(0.9);
    }
`;

export const CardPoster = styled.img`
    width: 150px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 15px;
  color: var(--text-color);

  width: 150px;
  word-break: break-word;
  overflow-wrap: break-word;
`;

export const CardReleaseDate = styled.p`
  color: var(--text-color);
`;