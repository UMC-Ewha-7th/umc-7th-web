import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  width: 100px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
`;

const InfoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  width: 100%;
  padding: 15px;
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  transform: translateY(${(props) => (props.isHovered ? '0' : '20px')});
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  pointer-events: ${(props) => (props.isHovered ? 'auto' : 'none')};
`;

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Poster
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <InfoOverlay isHovered={isHovered}>
        <h4>{movie.title}</h4>
        <p>개봉일: {movie.release_date}</p>
      </InfoOverlay>
    </Card>
  );
}

export default MovieCard;