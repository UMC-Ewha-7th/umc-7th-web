import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard.jsx';

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
  gap: 20px;
  padding: 20px;
  width:100%;
`;

function MovieList({ movie }) {
  console.log('movies:',movie);
  return (
    <MovieGrid>
      {movie.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieGrid>
  );
}

export default MovieList;