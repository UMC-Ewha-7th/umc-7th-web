import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard.jsx';

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;

function MovieList({ movies }) {
  console.log('movies:',movies);
  return (
    <MovieGrid>
      {/* {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))} */}
    </MovieGrid>
  );
}

export default MovieList;