import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  position: relative;
  width: 250px;
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
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  pointer-events: none;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (movie && movie.id) {
      navigate(`/movies/${movie.id}`);
    } else {
      console.error("Movie ID is undefined.");
    }
  };

  return (
    <Card>
      <Poster
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        onClick={handleClick} // 변경: onclick -> onClick
      />
      <InfoOverlay>
        <h4>{movie.title}</h4>
        <p>개봉일: {movie.release_date}</p>
      </InfoOverlay>
    </Card>
  );
}

export default MovieCard;