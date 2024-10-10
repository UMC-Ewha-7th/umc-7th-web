import React from 'react';
import MovieCard from './MovieCard.jsx';
import { MOVIES } from '../mocks/movies.js';  

function MovieList() {
  const gridStyle = {
    display:'grid',
    gridTemplateColumns: 'repeat(10,1fr)',
    gap:'5px'
  };

  return (
    <div style={gridStyle}>
      {MOVIES.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;