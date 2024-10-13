import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  width: 150px;
  margin: 10px;
  cursor: pointer;
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const InfoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  width: 100%;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${Card}:hover & {
    opacity: 1;
  }
`;

function MovieCard({ movie }) {
  return (
    <Card>
      <Poster src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <InfoOverlay>
        <h4>{movie.title}</h4>
        <p>개봉일: {movie.release_date}</p>
      </InfoOverlay>
    </Card>
  );
}

export default MovieCard;
